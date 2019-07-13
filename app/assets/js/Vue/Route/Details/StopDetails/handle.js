/**
 Created by svend on 13/07/2019.
 **/

const moment = require('moment');

export default (function () {

    const handle = function (_self) {
        let currentTime = getCurrentTime();
        Object.keys(_self.$props.selectTravelDetails.TimeInfos).forEach(function (key) {
            addMoreStationDetails(_self, key);
            calculateIfTimeAlreadyPassed(_self,key,currentTime);
            _self.orderedTimeInfo.push(_self.$props.selectTravelDetails.TimeInfos[key]);
        });
        _self.orderedTimeInfo.sort((a, b) => parseFloat(a.Order) - parseFloat(b.Order));
        _self.startIndex = _self.orderedTimeInfo.findIndex((el => parseInt(el.Station) === parseInt(_self.$props.startStation)));
    };

    function getCurrentTime() {
        return moment()
    }

    function calculateIfTimeAlreadyPassed(_self,key,currentTime) {
        let departureTime = moment(_self.$props.selectTravelDetails.TimeInfos[key].DepTime, "HH:mm");
        let timeDifference = currentTime.diff(departureTime);
        _self.$props.selectTravelDetails.TimeInfos[key].alreadyPassed = !(timeDifference > 0);
    }

    function addMoreStationDetails(_self, key) {
        let stationDetails = _self.$store.state.stations.stations.find((el => parseInt(el.時刻表編號) === parseInt(key)));
        _self.$props.selectTravelDetails.TimeInfos[key].站名 = stationDetails.站名;
        _self.$props.selectTravelDetails.TimeInfos[key].eng站名 = stationDetails.eng站名;
    }


    return {
        handle
    }

})();
