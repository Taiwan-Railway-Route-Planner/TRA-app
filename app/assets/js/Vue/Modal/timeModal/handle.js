/**
 Created by svend on 25/06/2019.
 **/

const moment = require('moment');

export default (function () {

    const handle = function (_self) {
        setTime(_self);
        setDateDetails(_self);
    };

    function setTime(_self) {
        _self.timeModal.selectedTime = moment().toDate();
    }

    function setDateDetails(_self) {
        moment().locale(_self.$props.time.local);
        _self.selectedDate = moment().format('L');
        _self.$props.time.modal.center.date.today = moment().format();
        _self.$props.time.modal.center.date.actual = _self.$props.formatTimeStampBasedOnLanguage.formatTimeStampForModel(_self);
    }

    const discard = function (_self) {

    };

    const save = function (_self) {
        _self.time.date.show = _self.$props.formatTimeStampBasedOnLanguage.formatTimeStampForShowingSelect(_self, _self.$props.time.modal.center.date.today);
        _self.time.date.real = moment(_self.$props.time.modal.center.date.today).locale('en').format('YYYYMMDD');
        if (_self.$store.state.language === "KO"){
            _self.time.time = moment(_self.timeModal.selectedTime).locale('en-SG').format('LT');
        } else {
            _self.time.time = moment(_self.timeModal.selectedTime).format('LT');
        }
    };

    return {
        handle,
        discard,
        save
    }

})();
