/**
 Created by svend on 11/08/2019.
 **/

const connectivityModule = require("tns-core-modules/connectivity");

module.exports = (function () {

    function checkInternetConnection() {
        const myConnectionType = connectivityModule.getConnectionType();
        switch (myConnectionType) {
            case connectivityModule.connectionType.none:
                // Denotes no Internet connection.
                console.log("No connection");
                break;
            case connectivityModule.connectionType.wifi:
                // Denotes a WiFi connection.
                console.log("WiFi connection");
                break;
            case connectivityModule.connectionType.mobile:
                // Denotes a mobile connection, i.e. cellular network or WAN.
                console.log("Mobile connection");
                break;
            case connectivityModule.connectionType.ethernet:
                // Denotes a ethernet connection.
                console.log("Ethernet connection");
                break;
            case connectivityModule.connectionType.bluetooth:
                // Denotes a bluetooth connection.
                console.log("Bluetooth connection");
                break;
            default:
                break;
        }
    }

    return {
        checkInternetConnection
    }

})();
