/**
 Created by svend on 3/07/2019.
 **/

const getRoutesOfADay = require("./getRoutesOfADay");

export default (function () {

    async function handleIncomingRouteDetails(_self) {
        await getAllRoutesForThatDay(_self);
        getPossibleRoutesForThatDay(_self);
    }

    async function getAllRoutesForThatDay(_self) {
        console.log("getAllRoutesForThatDay");
        await getRoutesOfADay.getAllRoutesOfACertainDay(_self);
    }

    function getPossibleRoutesForThatDay(_self) {

    }

    return {
        handleIncomingRouteDetails
    }

})();
