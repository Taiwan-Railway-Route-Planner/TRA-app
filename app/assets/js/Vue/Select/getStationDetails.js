/**
 Created by svend on 20/06/2019.
 **/

const requestHandler = require("../../request/requestHandler");

module.exports = (function () {

    async function getAllPossibleStations(_self) {
        if (_self.$store.state.stations === null || _self.$store.state.stations === undefined){
            const stations = await requestHandler.request.stations(_self);
            _self.$store.commit('updateStation', stations.data);
            _self.data.stationInfo = stations.data;
        } else {
            _self.data.stationInfo = _self.$store.state.stations;
        }
        _self.filteredStations = _self.data.stationInfo.stations;
    }

    return {
        getAllPossibleStations
    }

})();
