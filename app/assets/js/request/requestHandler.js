/**
 Created by svend on 14/06/2019.
 **/

const getStations = require("./Get/GetStations/requestForTheStations");
const getSearchFileForStations = require("./Get/GetSearchFileWithStations/requestForSearchStationFile");
const postRoute = require("./Post/PostRoute/requestForTheRoute");

module.exports = (function () {

    const request = {
        stations: getStations.getTheInformation,
        routePost: postRoute.getTheInformation,
        searchFileForStations: getSearchFileForStations.getTheInformation
    };


    return {
        request
    }

})();
