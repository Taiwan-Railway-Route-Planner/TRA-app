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
                    details : _self.data.routeDetails.departure.details
                },
                arrival: {
                    details: _self.data.routeDetails.arrival.details
                },
                time:{
                    date:  _self.data.routeDetails.time.date,
                    time:  _self.data.routeDetails.time.time
                }
            }
        });
        response = response.data;
        if (response.error) {
            switch (_self.$store.state.language) {
                case "EN":
                    response.msg = errorMessages.messages.en.route;
                    break;
                case "ZH":
                    response.msg = errorMessages.messages.zh.route;
                    break;
                case "KO":
                    response.msg = errorMessages.messages.ko.route;
                    break;
                case "NL":
                    response.msg = errorMessages.messages.nl.route;
                    break;
                case "ES":
                    response.msg = errorMessages.messages.es.route;
                    break;
                case "DE":
                    response.msg = errorMessages.messages.de.route;
                    break;
                case "FR":
                    response.msg = errorMessages.messages.fr.route;
                    break;
                case "AR":
                    response.msg = errorMessages.messages.ar.route;
                    break;
                case "RU":
                    response.msg = errorMessages.messages.ru.route;
                    break;
            }
        }
        return response;
    };

    return {
        getTheInformation
    }

})();
