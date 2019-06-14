/**
 Created by svend on 14/06/2019.
 **/

const requestHandler = require("../../request/requestHandler");

export default (function () {

    async function getAllPossibleStations(_self) {
        const stations = await requestHandler.request.stations(_self);
        return stations.data;
    }


    return {
        getAllPossibleStations
    }

})();
