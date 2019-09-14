/**
 Created by svend on 18/07/2019.
 **/

const moment = require('moment');

export default (function () {

    function formatTimeStampForModel(_self, timeMoment = moment()) {
        switch (_self.$store.state.language) {
            case "EN":
                return moment(timeMoment).format('llll').replace(/\d\d:\d\d/i, '', '');
            case "ZH":
                return moment(timeMoment).format('llll').replace(/\d\d:\d\d/i, '', '').replace('一', '');
            case "KO":
                return moment(timeMoment).format('ll');
            case "NL":
                return moment(timeMoment).format('llll').replace(/\d\d:\d\d/i, '', '');
        }
    }

    function formatTimeStampForShowingSelect(_self, timeMoment = moment()) {
        switch (_self.$store.state.language) {
            case "EN":
                return moment(timeMoment).format('llll').replace(/\d\d:\d\d/i, '', '');
            case "ZH":
                return moment(timeMoment).format('llll').replace(/\d\d:\d\d/i, '', '').replace('一', '');
            case "KO":
                return moment(timeMoment).format('ll');
            case "NL":
                return moment(timeMoment).format('llll').replace(/\d\d:\d\d/i, '', '');
        }
    }

    function setHintTimeBasedOnTheLanguage(_self) {
        switch (_self.$store.state.language) {
            case "EN":
                return moment().format('llll');
            case "ZH":
                return moment().format('llll');
            case "KO":
                return moment().format('ll') + " " + moment().locale('en-SG').format('LT');
            case "NL":
                return moment().format('llll');
        }
    }


    return {
        formatTimeStampForModel,
        formatTimeStampForShowingSelect,
        setHintTimeBasedOnTheLanguage
    }

})();
