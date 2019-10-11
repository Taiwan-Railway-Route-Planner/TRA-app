/**
 Created by svend on 25/09/2019.
 **/

const language = require('./language');

export default (function () {

    const handleSetUpOfVue = function (_self) {
        loadLanguage(_self);
    };

    function loadLanguage(_self) {
        // TODO if add new language
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
    }


    return {
        handleSetUpOfVue
    }

})();
