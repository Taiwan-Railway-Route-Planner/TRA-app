/**
 Created by svend on 9/08/2019.
 **/

const postRequest = require('../../RequestFormat/PostFormat/PostFormat.js');
const urlModule = require('../../urlModule');
const errorMessages = require('../../errorMessage');

module.exports =  (function () {

    const getTheInformation = async function (_self) {
        let response = await postRequest.fetchRequestForGettingData({
            Url: urlModule.url.schedulesDay,
            getSpecifiedElement: false,
            method: "POST",
            body: {
                departure: {
                    details : _self.$props.routeDetails.departure.details
                },
                arrival: {
                    details: _self.$props.routeDetails.arrival.details
                },
                time:{
                    date:  _self.$props.routeDetails.time.date,
                    time:  _self.$props.routeDetails.time.time
                }
            }
        });
        response = response.data;
        if (response.error) {
            // if (_self.$store.state.language === "ZH"){
            //     response.msg = errorMessages.messages.zh.stations;
            // } else {
            response.msg = errorMessages.messages.eng.route;
            // }
        }
        return response;
    };

    return {
        getTheInformation
    }

})();
