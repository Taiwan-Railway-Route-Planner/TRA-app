/**
 Created by svend on 23/08/2019.
 **/

const moment = require('moment');

module.exports = (function () {

    const checkIfTheValuesAreCorrectBeforeWeCanStartSearchingAfterPossibleRoute = async function (_self, loadingModal, requestBuilderForSelect) {
        startLoadingModal(_self,loadingModal);
        if (_self.data.routeDetails.time.date.real === null) {
            assignTimeToRouteDetailsWhenEmpty(_self);
        }
        if (isEmpty(_self.data.routeDetails.departure.details) || isEmpty(_self.data.routeDetails.arrival.details)) {
            startOrAndEndpositionIsntFilledIn(_self);
        } else {
            await getPossibleRoutes(_self, requestBuilderForSelect);
        }
    };

    function assignTimeToRouteDetailsWhenEmpty (_self){
        _self.data.routeDetails.time.date.show = _self.formatTimeStampBasedOnLanguage.formatTimeStampForShowingSelect(_self);
        _self.data.routeDetails.time.date.real = moment().locale('en').format('YYYYMMDD');
        _self.data.routeDetails.time.time = _self.data.routeDetails.time.hint.replace(_self.data.routeDetails.time.date.show, '');
    }

    async function getPossibleRoutes (_self, requestBuilderForSelect){
        let isError = await requestBuilderForSelect.checkIfThereIsAPossibleRoute(_self);
        if (isError){
            showErrorMessageWhyRouteCantBeFound(_self);
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

    /***************** ERROR - MESSAGES *****************/

    function startOrAndEndpositionIsntFilledIn (_self){
        stopLoadingModal(_self);
        showError(_self, _self.data.error);
    }

    function showErrorMessageWhyRouteCantBeFound(_self) {
        stopLoadingModal(_self);
        showError(_self, _self.timeTable.msg);
    }

    /***************** HELP - FUNCTIONS *****************/

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

