/**
 Created by svend on 4/07/2019.
 **/

const getRequest = require('../../RequestFormat/GetFormat/GetFormat');
const urlModule = require('../../urlModule');
const errorMessages = require('../../errorMessage');

module.exports = (function () {

    const getTheInformation = async function (_self) {
        const response = (await getRequest.fetchRequestForGettingData({
            Url: urlModule.url.schedules.replace("DATE", _self.longDate),
        }));
        if (response.error) {
            // if (_self.$store.state.language === "ZH"){
            //     response.msg = errorMessages.messages.zh.date;
            // } else {
            response.msg = errorMessages.messages.eng.date;
            // }
        }
        return response;
    };

    return {
        getTheInformation
    }
})();
