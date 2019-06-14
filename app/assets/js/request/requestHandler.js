/**
 Created by svend on 14/06/2019.
 **/

const getStations = require("./Get/GetStations/requestForTheStations");
const getRoute = require("./Get/GetRoute/RequestForTheRoute");

export default (function () {

    const request = {
        stations: getStations.getTheInformation,
        route: getRoute.getTheInformation
    };


    return {
        request
    }

})();
