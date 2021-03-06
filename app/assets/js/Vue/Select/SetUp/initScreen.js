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
        // TODO if add new language
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
            case "NL":
                _self.data = language.language.nl;
                break;
            case "ES":
                _self.data = language.language.es;
                break;
            case "DE":
                _self.data = language.language.de;
                break;
            case "FR":
                _self.data = language.language.fr;
                break;
            case "AR":
                _self.data = language.language.ar;
                break;
            case "RU":
                _self.data = language.language.ru;
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
        initScreen,
        loadStationDetails
    }

})();
