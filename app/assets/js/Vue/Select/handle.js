/**
 Created by svend on 14/06/2019.
 **/

const getStationDetails = require("./getStationDetails");
const language = require("./language");
const moment = require('moment');
const InternetConnection = require('../InternetConnection');
import { topmost } from "ui/frame"

export default (function () {

    const setUpSelectVue = async function (_self) {
        loadLanguage(_self);
        setHintText(_self);
        await loadStationDetails(_self);
    };

    function loadLanguage(_self) {
        switch (_self.$store.state.language) {
            case "EN":
                _self.data = language.language.en;
                break;
            case "ZH":
                _self.data = language.language.zh;
                break;
            case "KO":
                _self.data = language.language.ko;
                break;
            default:
                //TODO remove
                _self.data = language.language.en;
                _self.$store.commit('updateLanguage',"EN");
                break;
        }
        setTime(_self);
    }

    function setHintText(_self) {
        _self.data.searchBar.hintText.now = _self.data.searchBar.hintText.startStation;
    }

    function setTime(_self) {
        moment.locale(_self.data.routeDetails.time.local);
        _self.data.routeDetails.time.hint = _self.formatTimeStampBasedOnLanguage.setHintTimeBasedOnTheLanguage(_self);
    }

    async function loadStationDetails(_self) {
        if (InternetConnection.checkInternetConnection(_self)){
            await getStationDetails.getAllPossibleStations(_self);
        }
    }

    async function controlValuesBeforeGoingToRoute(_self, loadingModal) {
        startLoadingModal(_self,loadingModal);
        if (_self.data.routeDetails.time.date.real === null) {
            _self.data.routeDetails.time.date.show = _self.formatTimeStampBasedOnLanguage.formatTimeStampForShowingSelect(_self);
            _self.data.routeDetails.time.date.real = moment().locale('en').format('YYYYMMDD');
            _self.data.routeDetails.time.time = _self.data.routeDetails.time.hint.replace(_self.data.routeDetails.time.date.show, '');
        }
        if (isEmpty(_self.data.routeDetails.departure.details) || isEmpty(_self.data.routeDetails.arrival.details)) {
            // TODO give error notification
            console.log("fails");
            stopLoadingModal(_self,loadingModal);
        } else {
            let isError = await getAllRoutesForThatDay(_self);
            if (isError){
                // TODO show notification
                stopLoadingModal(_self,loadingModal);
            } else {
                _self.$goto('Route', {
                    props: {
                        routeDetails: _self.data.routeDetails,
                        timeTable: _self.timeTable,
                        indexWithClosestToRealTime : _self.indexWithClosestToRealTime
                    }
                });
                stopLoadingModal(_self,loadingModal);
            }
        }
    }

    async function getAllRoutesForThatDay(_self) {
        //TODO add loading screen + add error notification
        _self.timeTable = await getStationDetails.getAllRoutesOfACertainDay(_self);
        if (_self.timeTable.error){
            return true;
        } else {
            _self.timeTable = _self.timeTable.data;
            _self.indexWithClosestToRealTime = _self.timeTable.data.findIndex((el => el.timeDifference > 0));
            return false;
        }
    }

    function isEmpty(obj) {
        return !obj.hasOwnProperty('routeCode')
    }

    function startLoadingModal(_self, loadingModal) {
        _self.$showModal(loadingModal);
    }

    function stopLoadingModal(_self,loadingModal) {
        const page = topmost().currentPage;
        if (page && page.modal) {
            page.modal.closeModal()
        }
    }

    return {
        setUpSelectVue,
        controlValuesBeforeGoingToRoute
    }

})();
