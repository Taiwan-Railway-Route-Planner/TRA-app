/**
 Created by svend on 4/07/2019.
 **/

const requestHandler = require("../../request/requestHandler");
const moment = require('moment');

module.exports = (function () {

    async function getAllRoutesOfACertainDay(_self) {
        setLongDate(_self);
        return await requestHandler.request.routePost(_self);
    }

    function setLongDate(_self) {
        _self.longDate = _self.$props.routeDetails.time.date.real;
    }

    return {
        getAllRoutesOfACertainDay
    }

})();