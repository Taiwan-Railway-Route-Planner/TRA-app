/**
 Created by svend on 14/07/2019.
 **/

const language = require('./language');
const possibleLanguages = require('../PossibleLanguage');

export default (function () {

    const handleSetUpOfVue = function (_self) {
        loadLanguage(_self);
        loadAllPossibleLanguages(_self);
    };

    function loadLanguage(_self) {
        switch (_self.$store.state.language) {
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
        }
    }

    function loadAllPossibleLanguages(_self) {
        _self.possibleLanguages = possibleLanguages.languageAvailable;
        _self.possibleLanguagesArray = possibleLanguages.languageAvailable.map((el => el.nameNative));
        _self.selectedItem = possibleLanguages.languageAvailable.findIndex((el => el.abbr === _self.$store.state.language));
    }

    const saveLanguage = function (_self) {
        let abbrLanguage = _self.possibleLanguages[_self.selectedItem].abbr;
        _self.$store.commit('updateLanguage', abbrLanguage);
        loadLanguage(_self);
    };

    return {
        handleSetUpOfVue,
        saveLanguage
    }

})();
