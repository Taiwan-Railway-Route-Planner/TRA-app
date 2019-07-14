/**
 Created by svend on 14/07/2019.
 **/

const language = require('./language');

export default (function () {

    const handleSetUpOfVue = function (_self) {
        loadLanguage(_self)
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
        }
    }

    return {
        handleSetUpOfVue
    }

})();
