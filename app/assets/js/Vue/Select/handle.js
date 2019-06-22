/**
 Created by svend on 14/06/2019.
 **/

const getStationDetails = require("./getStationDetails");
const language = require("./language");

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
    }

    function setHintText(_self){
        _self.data.searchBar.hintText.now = _self.data.searchBar.hintText.startStation;
    }

    async function loadStationDetails(_self) {
        await getStationDetails.getAllPossibleStations(_self);
    }

    return {
        setUpSelectVue
    }

})();
