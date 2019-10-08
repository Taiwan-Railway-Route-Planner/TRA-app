/**
 Created by svend on 29/08/2019.
 **/

let SocialShare = require("nativescript-social-share");
const language = require("./language");

export default (function () {

    const share = function (_self, transferOrNot) {
        console.log(_self.$props.routeDetails);
        SocialShare.shareText(loadLanguage(_self, transferOrNot));
    };

    function loadLanguage(_self, transferOrNot) {
        // TODO if add new language
        switch (_self.$store.state.language) {
            case "EN":
                return transferOrNot ? buildTransferSentence(_self, language.language.en.sentence) : buildSentence(_self, language.language.en.sentence);
            case "ZH":
                return transferOrNot ? buildZHTransferSentence(_self, language.language.zh.sentence) : buildZHSentence(_self, language.language.zh.sentence);
            case "KO":
                return transferOrNot ? buildTransferSentence(_self, language.language.ko.sentence) : buildSentence(_self, language.language.ko.sentence);
            case "NL":
                return transferOrNot ? buildTransferSentence(_self, language.language.nl.sentence) : buildSentence(_self, language.language.nl.sentence);
            case "ES":
                return transferOrNot ? buildTransferSentence(_self, language.language.es.sentence) : buildSentence(_self, language.language.es.sentence);
            case "DE":
                return transferOrNot ? buildTransferSentence(_self, language.language.de.sentence) : buildSentence(_self, language.language.de.sentence);
            case "FR":
                return transferOrNot ? buildTransferSentence(_self, language.language.fr.sentence) : buildSentence(_self, language.language.fr.sentence);
        }
    }

    function buildTransferSentence(_self, sentence) {
        return sentence.replace("POINTA", _self.$props.routeDetails.departure.details.eng站名)
            .replace("TIMEA", _self.$props.selectTravelDetails.startTime)
            .replace("POINTB", _self.$props.routeDetails.arrival.details.eng站名)
            .replace("TIMEB", _self.$props.selectTravelDetails.endTime);
    }

    function buildZHTransferSentence(_self, sentence) {
        return sentence.replace("POINTA", _self.$props.routeDetails.departure.details.站名)
            .replace("TIMEA", _self.$props.selectTravelDetails.TimeInfos[_self.$props.routeDetails.departure.details.時刻表編號].DepTime)
            .replace("POINTB", _self.$props.routeDetails.arrival.details.站名)
            .replace("TIMEB", _self.$props.selectTravelDetails.TimeInfos[_self.$props.routeDetails.arrival.details.時刻表編號].ArrTime);
    }

    function buildSentence(_self, sentence) {
        return sentence.replace("POINTA", _self.$props.routeDetails.departure.details.eng站名)
            .replace("TIMEA", _self.$props.selectTravelDetails.TimeInfos[_self.$props.routeDetails.departure.details.時刻表編號].DepTime)
            .replace("POINTB", _self.$props.routeDetails.arrival.details.eng站名)
            .replace("TIMEB", _self.$props.selectTravelDetails.TimeInfos[_self.$props.routeDetails.arrival.details.時刻表編號].ArrTime);
    }

    function buildZHSentence(_self, sentence) {
        return sentence.replace("POINTA", _self.$props.routeDetails.departure.details.站名)
            .replace("TIMEA", _self.$props.selectTravelDetails.TimeInfos[_self.$props.routeDetails.departure.details.時刻表編號].DepTime)
            .replace("POINTB", _self.$props.routeDetails.arrival.details.站名)
            .replace("TIMEB", _self.$props.selectTravelDetails.TimeInfos[_self.$props.routeDetails.arrival.details.時刻表編號].ArrTime);
    }


    return {
        share
    }

})();
