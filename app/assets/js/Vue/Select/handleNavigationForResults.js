/**
 Created by svend on 23/08/2019.
 **/

const moment = require('moment');

module.exports = (function () {

    const checkIfTheValuesAreCorrectBeforeWeCanStartSearchingAfterPossibleRoute = async function (_self, loadingModal, requestBuilderForSelect) {
        startLoadingModal(_self,loadingModal);
        if (_self.data.routeDetails.time.date.real === null) {
            _self.data.routeDetails.time.date.show = _self.formatTimeStampBasedOnLanguage.formatTimeStampForShowingSelect(_self);
            _self.data.routeDetails.time.date.real = moment().locale('en').format('YYYYMMDD');
            _self.data.routeDetails.time.time = _self.data.routeDetails.time.hint.replace(_self.data.routeDetails.time.date.show, '');
        }
        if (isEmpty(_self.data.routeDetails.departure.details) || isEmpty(_self.data.routeDetails.arrival.details)) {
            stopLoadingModal(_self);
            showError(_self, _self.data.error);
        } else {
            let isError = await getAllRoutesForThatDay(_self, requestBuilderForSelect);
            if (isError){
                stopLoadingModal(_self);
                showError(_self, _self.timeTable.msg);
            } else {
                await _self.$goto('Route', {
                    props: {
                        routeDetails: _self.data.routeDetails,
                        timeTable: _self.timeTable,
                        indexWithClosestToRealTime : _self.indexWithClosestToRealTime
                    }
                });
                stopLoadingModal(_self);
            }
        }
    };

    async function getAllRoutesForThatDay(_self, requestBuilderForSelect) {
        _self.timeTable = await requestBuilderForSelect.getAllRoutesOfACertainDay(_self);
        if (_self.timeTable.error){
            return true;
        } else {
            _self.timeTable = _self.timeTable.data;
            _self.indexWithClosestToRealTime = _self.timeTable.data.findIndex((el => el.timeDifference > 0));
            return false;
        }
    }

    function isEmpty(obj) {
        return !obj.hasOwnProperty('routeCode')
    }

    function startLoadingModal(_self, loadingModal) {
        _self.$showModal(loadingModal);
    }

    function stopLoadingModal(_self) {
        const page = _self.topmost().currentPage;
        if (page && page.modal) {
            page.modal.closeModal()
        }
    }

    function showError(_self,errorMessage) {
        _self.feedback.error({
            title: "Error",
            message: errorMessage,
            duration: 6000
        })
    }

    return {
        checkIfTheValuesAreCorrectBeforeWeCanStartSearchingAfterPossibleRoute
    }

})();

