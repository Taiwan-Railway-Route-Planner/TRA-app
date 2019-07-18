/**
 Created by svend on 14/06/2019.
 **/

const getStationDetails = require("./getStationDetails");
const language = require("./language");
const moment = require('moment');

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
        }
        setTime(_self);
    }

    function setHintText(_self) {
        _self.data.searchBar.hintText.now = _self.data.searchBar.hintText.startStation;
    }

    function setTime(_self) {
        moment.locale(_self.data.routeDetails.time.local);
        _self.data.routeDetails.time.hint = setHintTimeBasedOnTheLanguage(_self);
    }

    function setHintTimeBasedOnTheLanguage(_self){
        switch (_self.$store.state.language) {
            case "EN":
                return moment().format('llll');
            case "ZH":
                return moment().format('llll');
            case "KO":
                return moment().format('lll');
        }
    }

    async function loadStationDetails(_self) {
        await getStationDetails.getAllPossibleStations(_self);
    }

    function controlValuesBeforeGoingToRoute(_self) {
        if (_self.data.routeDetails.time.date.real === null) {
            _self.data.routeDetails.time.date.show = showDifferentTimeStampBasedOnLanguage(_self);
            _self.data.routeDetails.time.date.real = moment().locale('en').format('YYYYMMDD');
            _self.data.routeDetails.time.time = _self.data.routeDetails.time.hint.replace(_self.data.routeDetails.time.date.show, '');
        }
        if (isEmpty(_self.data.routeDetails.departure.details) && isEmpty(_self.data.routeDetails.arrival.details)) {
            // TODO give error notification
        } else {
            _self.$goto('Route', {
                props: {
                    routeDetails: _self.data.routeDetails,
                }
            });
        }
    }

    function showDifferentTimeStampBasedOnLanguage(_self) {
        switch (_self.$store.state.language) {
            case "EN":
                return moment().format('llll').replace(/\d\d:\d\d/i, '', '');
            case "ZH":
                return moment().format('llll').replace(/\d\d:\d\d/i, '', '').replace('一', '');
            case "KO":
                return moment().format('lll').replace(/\d\d:\d\d/i, '', '');
        }
    }

    function isEmpty(obj) {
        // TODO doesn't work
        return Object.keys(obj).length === 0 && obj.constructor === Object
    }

    return {
        setUpSelectVue,
        controlValuesBeforeGoingToRoute
    }

})();
