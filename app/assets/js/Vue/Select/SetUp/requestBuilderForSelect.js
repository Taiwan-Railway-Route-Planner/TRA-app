/**
 Created by svend on 20/06/2019.
 **/

const requestHandler = require("../../../request/requestHandler");
const InternetConnection = require('../../InternetConnection');

module.exports = (function () {

    async function getAllPossibleStations(_self) {
        if (_self.$store.state.stations === null
            || _self.$store.state.stations === undefined
            || _self.$store.state.forceUpdate === false) {
            if (InternetConnection.checkInternetConnection()) {
                await getSearchFileToSearchStations(_self);
                const stations = await requestHandler.request.stations(_self);
                _self.$store.commit('updateStation', stations.data);
                _self.$store.commit('forceUpdateStationInfo', true);
                _self.data.stationInfo = stations.data;
                _self.isFetching = false;
            }
        } else {
            _self.data.stationInfo = _self.$store.state.stations;
            _self.isFetching = false;
        }
        if (_self.data.stationInfo !== undefined) {
            _self.filteredStations = _self.data.stationInfo.stations;
            _self.countyFilterStations = _self.data.stationInfo.stations;
        }
    }

    async function getSearchFileToSearchStations(_self) {
        const searchFile = await requestHandler.request.searchFileForStations(_self);
        _self.$store.commit('updateSearchFile', searchFile.data);
    }

    async function checkIfThereIsAPossibleRoute(_self) {
        if (!InternetConnection.checkInternetConnection()) {
            return null;
        } else {
            _self.timeTable = await requestHandler.request.routePost(_self);
            if (_self.timeTable.error) {
                return true;
            } else {
                _self.timeTable = _self.timeTable.data;
                _self.indexWithClosestToRealTime = _self.timeTable.data.findIndex((el => el.timeDifference > 0));
                return false;
            }
        }

    }

    return {
        getAllPossibleStations,
        checkIfThereIsAPossibleRoute
    }

})();
