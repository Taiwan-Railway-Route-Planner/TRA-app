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
        _self.selectedTime.hour = moment().format('h');
        _self.selectedTime.minute = moment().format('m');
    }

    function setDateDetails(_self) {
        moment().locale(_self.$props.time.local);
        _self.selectedDate = moment().format('L');
        _self.$props.time.modal.center.date.today = moment().format();
        _self.$props.time.modal.center.date.actual = moment().format('llll').replace(moment().format('LT'), '').replace('一', '');
    }
    
    return {
        handle
    }

})();
