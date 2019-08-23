/**
 Created by svend on 11/08/2019.
 **/

const connectivityModule = require("tns-core-modules/connectivity");

module.exports = (function () {

    function checkInternetConnection() {
        const myConnectionType = connectivityModule.getConnectionType();
        switch (myConnectionType) {
            case connectivityModule.connectionType.none:
                return false;
            case connectivityModule.connectionType.wifi:
            case connectivityModule.connectionType.mobile:
            case connectivityModule.connectionType.ethernet:
            case connectivityModule.connectionType.bluetooth:
                return true;
        }
    }

    return {
        checkInternetConnection
    }

})();
