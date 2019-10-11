/**
 Created by svend on 14/09/2019.
 **/

const PossibleLanguage = require('../PossibleLanguage');
const language = require("./language");

export default (function () {


    const handle = function (_self) {
        _self.languages = PossibleLanguage.languageAvailable;
    };

    const loadSelectedLanguage = function (_self, abbr) {
        // TODO if add new language
        switch (abbr) {
            case "EN":
                _self.data = language.language.en;
                break;
            case "ZH":
                _self.data = language.language.zh;
                break;
            case "KO":
                _self.data = language.language.ko;
                break;
            case "NL":
                _self.data = language.language.nl;
                break;
            case "ES":
                _self.data = language.language.es;
                break;
            case "DE":
                _self.data = language.language.de;
                break;
            case "FR":
                _self.data = language.language.fr;
                break;
            case "AR":
                _self.data = language.language.ar;
                break;
            case "RU":
                _self.data = language.language.ru;
                break;
        }
        _self.saveAbbr = abbr;
        _self.selected = true;
    };

    return {
        handle,
        loadSelectedLanguage
    }

})();
