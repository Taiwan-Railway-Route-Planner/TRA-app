/**
 Created by svend on 4/07/2019.
 **/

const requestHandler = require("../../request/requestHandler");

module.exports = (function () {

    async function getAllRoutesOfACertainDay(_self) {
        console.log("dhfksdhkf", JSON.stringify(requestHandler));
        const date = await requestHandler.request.date(_self);
        console.log(date);
        console.log(date.data);
        return date;
    }


    return {
        getAllRoutesOfACertainDay
    }

})();
