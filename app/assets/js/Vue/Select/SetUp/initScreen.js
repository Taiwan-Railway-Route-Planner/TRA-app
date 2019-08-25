/**
 Created by svend on 23/08/2019.
 **/

const language = require("../language");
const moment = require('moment');

module.exports = (function () {

    const initScreen = async function (_self, requestBuilderForSelect) {
        loadLanguage(_self);
        setHintText(_self);
        await loadStationDetails(_self, requestBuilderForSelect);
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

    async function loadStationDetails(_self, requestBuilderForSelect) {
        await requestBuilderForSelect.getAllPossibleStations(_self);
    }

    return {
        initScreen
    }

})();
