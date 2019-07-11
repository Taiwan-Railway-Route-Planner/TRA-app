/**
 Created by svend on 3/07/2019.
 **/

const getRoutesOfADay = require("./getRoutesOfADay");
const language = require('./language');
const moment = require("moment");

export default (function () {

    const handleIncomingRouteDetails = async function(_self) {
        loadLanguage(_self);
        await getAllRoutesForThatDay(_self);
    };

    function loadLanguage(_self) {
        if (_self.$store.state.language === 'EN'){
            _self.data = language.language.en;
        } else {
            _self.data = language.language.zh;
        }
    }

    async function getAllRoutesForThatDay(_self) {
        let routeData = await getRoutesOfADay.getAllRoutesOfACertainDay(_self);
        filterTheNotCorrectRoutesOut(_self,routeData);
    }

    function filterTheNotCorrectRoutesOut(_self,routeData) {
        const intersection = _self.props.routeDetails.departure.details.routeCode.filter(element => _self.props.routeDetails.arrival.details.routeCode.includes(element));
        if (intersection.length !== 0){
            checkWhichRouteItIs(_self,routeData,intersection);
        } else {
            //TODO branch different lines
            console.log("routes aren't matched");
        }
    }

    function checkWhichRouteItIs(_self,routeData,Intersection) {
        let mainRouteCode;
        if (Intersection[0] === 1){
            mainRouteCode = calculateMainRouteCodeForRoundLine(_self);
        } else {
            //TODO branch different lines
            console.log("Other route, search line Details");
        }
        getAllPossibleMainRoutes(_self,routeData,mainRouteCode);
    }

    function calculateMainRouteCodeForRoundLine(_self) {
        let departureCode = parseInt(_self.props.routeDetails.departure.details.traWebsiteCode);
        let arrivalCode = parseInt(_self.props.routeDetails.arrival.details.traWebsiteCode);
        if (departureCode < arrivalCode){
            return 1;
        } else {
            return -1;
        }
    }

    function getAllPossibleMainRoutes(_self,routeData,mainRouteCode) {
        let newRouteData = filterMainRouteOut(routeData.data.TrainInfos,mainRouteCode);
        console.log(newRouteData.length);
        getPossibleRoutesForThatDay(_self,newRouteData)
    }

    function filterMainRouteOut(routeData,mainRouteCode) {
        return routeData.filter((el => parseInt(el.mainRoute) === mainRouteCode));
    }

    function getPossibleRoutesForThatDay(_self,routeData) {
        let filterRouteDataWithDepartureStation = filterRouteArrayOnStations(routeData,_self.props.routeDetails.departure.details.時刻表編號);
        let filterRouteDataWithBothStations = filterRouteArrayOnStations(filterRouteDataWithDepartureStation,_self.props.routeDetails.arrival.details.時刻表編號);
        let departureTime = moment(_self.props.routeDetails.time.time, "HH:mm");
        _self.timeTable = findTheRouteWithCloseTimeStamp(filterRouteDataWithBothStations,_self.props.routeDetails.departure.details.時刻表編號, departureTime);
        _self.indexWithClosestToRealTime = _self.timeTable.findIndex((el => el.timeDifference > 0));
        _self.index = _self.indexWithClosestToRealTime;
    }

    function findTheRouteWithCloseTimeStamp(filterRouteDataWithBothStations, departureStation, departureTime) {
        return filterRouteDataWithBothStations.map(function (el) {
            let elementTime = moment(el.TimeInfos[departureStation].DepTime, "HH:mm:ss");
            if (elementTime.toISOString().startsWith("00:")){
                console.log("After midnight");
                console.log(elementTime);
            }
            el.timeDifference = elementTime.diff(departureTime);
            return el;
        }).sort(function (a, b) {
            return parseInt(a.timeDifference) - parseInt(b.timeDifference);
        })
    }

    function filterRouteArrayOnStations(routeData, filterStation) {
        return routeData.filter((el => filterStation in el.TimeInfos));
    }
    
    function findClosestNumber() {
        
    }

    return {
        handleIncomingRouteDetails
    }

})();
