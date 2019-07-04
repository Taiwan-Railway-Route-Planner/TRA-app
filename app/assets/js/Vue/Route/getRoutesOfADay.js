/**
 Created by svend on 4/07/2019.
 **/

const requestHandler = require("../../request/requestHandler");

module.exports = (function () {

    async function getAllRoutesOfACertainDay(_self) {
        return await requestHandler.request.date(_self);
    }


    return {
        getAllRoutesOfACertainDay
    }

})();
