/**
 Created by svend on 3/07/2019.
 **/

const getRoutesOfADay = require("./getRoutesOfADay");
const moment = require("moment");

export default (function () {

    const handleIncomingRouteDetails = async function(_self) {
        await getAllRoutesForThatDay(_self);
    };

    async function getAllRoutesForThatDay(_self) {
        let routeData = await getRoutesOfADay.getAllRoutesOfACertainDay(_self);
        filterTheNotCorrectRoutesOut(_self,routeData);
    }

    function filterTheNotCorrectRoutesOut(_self,routeData) {
        const intersection = _self.props.routeDetails.departure.details.routeCode.filter(element => _self.props.routeDetails.arrival.details.routeCode.includes(element));
        if (intersection.length !== 0){

        } else {
            //TODO branch different lines
            console.log("routes aren't matched");
        }

    }

    function getPossibleRoutesForThatDay(_self,routeData) {
        let filterRouteDataWithDepartureStation = filterRouteArrayOnStations(routeData.data.TrainInfos,_self.props.routeDetails.departure.details.時刻表編號);
        let filterRouteDataWithBothStations = filterRouteArrayOnStations(filterRouteDataWithDepartureStation,_self.props.routeDetails.arrival.details.時刻表編號);
        let departureTime = moment(_self.props.routeDetails.time.time, "HH:mm");
        console.log("departureTime", departureTime);
        let firstIndex = findTheRouteWithCloseTimeStamp(filterRouteDataWithBothStations,_self.props.routeDetails.departure.details.時刻表編號, departureTime);
        console.log(JSON.stringify(firstIndex))
    }


    function findTheRouteWithCloseTimeStamp(filterRouteDataWithBothStations, departureStation, departureTime) {
        return filterRouteDataWithBothStations.map(function (el) {
            let elementTime = moment(el.TimeInfos[departureStation].DepTime, "HH:mm:ss");
            el.timeDifference = elementTime.diff(departureTime);
            return el;
        }).sort(function (a, b) {
            return parseInt(a.timeDifference) - parseInt(b.timeDifference);
        })
    }
    
    function orderArray() {
        
    }


    function filterRouteArrayOnStations(routeData, filterStation) {
        return routeData.filter((el => filterStation in el.TimeInfos));
    }


    return {
        handleIncomingRouteDetails
    }

})();
