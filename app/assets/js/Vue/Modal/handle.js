/**
 Created by svend on 18/01/2020.
 **/

import moment from "moment";

export default (function () {

    const init = function(_self) {
        setTime(_self);
        setDate(_self);
    };

    function setTime(_self) {
        _self.selectedTime = moment().toDate();
    }

    function setDate(_self) {
        moment().locale(_self.$props.time.local);
        _self.selectedDate = moment().format('L');
        _self.$props.time.modal.center.date.today = moment().format();
        _self.$props.time.modal.center.date.actual = _self.$props.formatTimeStampBasedOnLanguage.formatTimeStampForModel(_self);
    }

    function save(_self) {
        saveTime(_self);
        saveDate(_self);
    }

    function saveDate(_self) {
        _self.$props.time.modal.center.date.today = moment(_self.selectedDate, 'DD-MM-YYYY').format();
        _self.$props.time.modal.center.date.actual = _self.$props.formatTimeStampBasedOnLanguage.formatTimeStampForModel(_self, _self.$props.time.modal.center.date.today);
        _self.time.date.show = _self.$props.formatTimeStampBasedOnLanguage.formatTimeStampForShowingSelect(_self, _self.$props.time.modal.center.date.today);
        _self.time.date.real = moment(_self.$props.time.modal.center.date.today).locale('en').format('YYYYMMDD');

    }

    function saveTime(_self) {
        if (_self.$store.state.language === "KO"){
            _self.time.time = moment(_self.selectedTime).locale('en-SG').format('LT');
        } else {
            _self.time.time = moment(_self.selectedTime).format('LT');
        }
    }

    return {
        init,
        save
    }

})();
