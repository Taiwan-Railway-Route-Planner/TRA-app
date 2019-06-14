/**
 Created by svend on 14/06/2019.
 **/

const getRequest = require('../../RequestFormat/GetFormat/GetFormat');
const urlModule = require('../../urlModule');
const errorMessages = require('../../errorMessage');

module.exports = (function () {

    const getTheInformation = async function (_self) {
        const response = (await getRequest.fetchRequestForGettingData({
            Url: urlModule.url.route,
        }));
        if (response.error) {
            // if (_self.$store.state.language === "ZH"){
            //     response.msg = errorMessages.messages.zh.route;
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
