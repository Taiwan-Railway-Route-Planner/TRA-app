/**
 Created by svend on 14/06/2019.
 **/

const getRequest = require('../../RequestFormat/GetFormat/GetFormat');
const urlModule = require('../../urlModule');
const errorMessages = require('../../errorMessage');

module.exports = (function () {

    const getTheInformation = async function (_self) {
        const response = (await getRequest.fetchRequestForGettingData({
            Url: urlModule.url.easyToSearchStationInfo,
        }));
        if (response.error) {
            switch (_self.$store.state.language) {
                case "EN":
                    response.msg = errorMessages.messages.en.stations;
                    break;
                case "ZH":
                    response.msg = errorMessages.messages.zh.stations;
                    break;
                case "KO":
                    response.msg = errorMessages.messages.ko.stations;
                    break;
                case "NL":
                    response.msg = errorMessages.messages.nl.stations;
                    break;
                case "ES":
                    response.msg = errorMessages.messages.es.stations;
                    break;
                case "DE":
                    response.msg = errorMessages.messages.de.stations;
                    break;
                case "FR":
                    response.msg = errorMessages.messages.fr.stations;
                    break;
                case "AR":
                    response.msg = errorMessages.messages.ar.stations;
                    break;
                case "RU":
                    response.msg = errorMessages.messages.ru.stations;
                    break;
            }
        }
        return response;
    };

    return {
        getTheInformation
    }

})();
