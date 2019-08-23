/**
 Created by svend on 14/06/2019.
 **/

const requestBuilderForSelect = require("./requestBuilderForSelect");
const initScreen = require('./initScreen');
const moment = require('moment');
import { topmost } from "ui/frame"

const FeedbackPlugin = require("nativescript-feedback");
const feedback = new FeedbackPlugin.Feedback();

export default (function () {

    const setUpSelectVue = async function (_self) {
        await initScreen.initScreen(_self, requestBuilderForSelect)
    };


    async function controlValuesBeforeGoingToRoute(_self, loadingModal) {
        startLoadingModal(_self,loadingModal);
        if (_self.data.routeDetails.time.date.real === null) {
            _self.data.routeDetails.time.date.show = _self.formatTimeStampBasedOnLanguage.formatTimeStampForShowingSelect(_self);
            _self.data.routeDetails.time.date.real = moment().locale('en').format('YYYYMMDD');
            _self.data.routeDetails.time.time = _self.data.routeDetails.time.hint.replace(_self.data.routeDetails.time.date.show, '');
        }
        if (isEmpty(_self.data.routeDetails.departure.details) || isEmpty(_self.data.routeDetails.arrival.details)) {
            stopLoadingModal();
            showError(_self.data.error);
        } else {
            let isError = await getAllRoutesForThatDay(_self);
            if (isError){
                stopLoadingModal();
                showError(_self.timeTable.msg);
            } else {
                await _self.$goto('Route', {
                    props: {
                        routeDetails: _self.data.routeDetails,
                        timeTable: _self.timeTable,
                        indexWithClosestToRealTime : _self.indexWithClosestToRealTime
                    }
                });
                stopLoadingModal();
            }
        }
    }

    async function getAllRoutesForThatDay(_self) {
        _self.timeTable = await requestBuilderForSelect.getAllRoutesOfACertainDay(_self);
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

    function stopLoadingModal() {
        const page = topmost().currentPage;
        if (page && page.modal) {
            page.modal.closeModal()
        }
    }

    function showError(errorMessage) {
        feedback.error({
            title: "Error",
            message: errorMessage,
            duration: 6000
        })
    }

    return {
        setUpSelectVue,
        controlValuesBeforeGoingToRoute
    }

})();
