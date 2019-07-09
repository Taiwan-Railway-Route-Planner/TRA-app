/**
 Created by svend on 14/06/2019.
 **/

module.exports = (function () {

    const HOME_IP = "depickeresven.github.io";
    const BASE_URL = "https://" + HOME_IP + "/TRATimetableData/";

    const url = {
        schedules: BASE_URL + "Schedules/DATE.json",
        lines: BASE_URL + "Lines/LINENAME.json",
        station: BASE_URL + "stationInfo.json",
    };

    return {
        url
    }

})();
