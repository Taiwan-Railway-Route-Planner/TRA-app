/**
 Created by svend on 11/08/2019.
 **/

const connectivityModule = require("tns-core-modules/connectivity");
// const FeedbackPlugin = require("nativescript-feedback");
// const feedback = new FeedbackPlugin.Feedback();

module.exports = (function () {

    function checkInternetConnection(_self) {
        const myConnectionType = connectivityModule.getConnectionType();
        switch (myConnectionType) {
            case connectivityModule.connectionType.none:
                // Denotes no Internet connection.
                console.log("No internet connection");
                // console.log(feedback);
                // console.log(feedback.error);
                // feedback.error({
                //     title: "No internet connection!",
                // });
                return false;
            case connectivityModule.connectionType.wifi:
            case connectivityModule.connectionType.mobile:
            case connectivityModule.connectionType.ethernet:
            case connectivityModule.connectionType.bluetooth:
                // Denotes a WiFi connection.
                console.log("Has internet connection");
                return true;
        }
    }

    return {
        checkInternetConnection
    }

})();
