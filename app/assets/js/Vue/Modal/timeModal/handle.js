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
        _self.selectedTime = moment().toDate();
    }

    function setDateDetails(_self) {
        moment().locale(_self.$props.time.local);
        _self.selectedDate = moment().format('L');
        _self.$props.time.modal.center.date.today = moment().format();
        _self.$props.time.modal.center.date.actual = moment().format('llll').replace(/\d\d:\d\d/i, '', '').replace('一', '');
    }

    const discard = function (_self) {

    };

    const save = function (_self) {
        _self.time.date = moment(_self.$props.time.modal.center.date.today).format('llll').replace(/\d\d:\d\d/i, '', '').replace('一', '');
        _self.time.time = moment(_self.selectedTime).format('LT');
    };

    return {
        handle,
        discard,
        save
    }

})();