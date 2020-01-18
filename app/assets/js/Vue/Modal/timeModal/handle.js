/**
 Created by svend on 25/06/2019.
 **/

const moment = require('moment');

export default (function () {

    const discard = function (_self) {

    };

    const save = function (_self) {
        _self.time.date.show = _self.$props.formatTimeStampBasedOnLanguage.formatTimeStampForShowingSelect(_self, _self.$props.time.modal.center.date.today);
        _self.time.date.real = moment(_self.$props.time.modal.center.date.today).locale('en').format('YYYYMMDD');
        if (_self.$store.state.language === "KO"){
            _self.time.time = moment(_self.timeWeSelected).locale('en-SG').format('LT');
        } else {
            _self.time.time = moment(_self.timeWeSelected).format('LT');
        }
    };

    return {
        discard,
        save
    }

})();
