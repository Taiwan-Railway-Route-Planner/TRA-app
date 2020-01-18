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

    return {
        init
    }

})();
