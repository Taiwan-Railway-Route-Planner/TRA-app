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
        if (_self.$store.state.language === 'EN'){
            _self.data = language.language.en;
        } else {
            _self.data = language.language.zh;
        }
        setTime(_self);
    }

    function setHintText(_self){
        _self.data.searchBar.hintText.now = _self.data.searchBar.hintText.startStation;
    }

    function setTime(_self){
        moment.locale(_self.data.routeDetails.time.local);
        _self.data.routeDetails.time.hint = moment().format('llll');
    }

    async function loadStationDetails(_self) {
        await getStationDetails.getAllPossibleStations(_self);
    }

    return {
        setUpSelectVue
    }

})();
