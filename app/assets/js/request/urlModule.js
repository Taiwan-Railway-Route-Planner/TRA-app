/**
 Created by svend on 14/06/2019.
 **/

export default (function () {

    const HOME_IP = "depickeresven.github.io";
    const BASE_URL = "https://" + HOME_IP + "/TRA-Information";

    const url = {
        schedules: BASE_URL + "Schedules/DATE.json",
        station: BASE_URL + " stationInfo.json",
    };

    return {
        url
    }

})();
