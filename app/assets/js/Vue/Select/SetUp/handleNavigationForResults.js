/**
 Created by svend on 23/08/2019.
 **/

const moment = require('moment');
import {
    LoadingIndicator,
    Mode
} from '@nstudio/nativescript-loading-indicator';
import { Frame } from "ui/frame";


export default (function () {

    const indicator = new LoadingIndicator();

    const checkIfTheValuesAreCorrectBeforeWeCanStartSearchingAfterPossibleRoute = async function (_self, requestBuilderForSelect, loadingModal) {
        startLoadingModal(_self, loadingModal);
        if (_self.data.routeDetails.time.date.real === null) {
            assignTimeToRouteDetailsWhenEmpty(_self);
        }
        if (isEmpty(_self.data.routeDetails.departure.details) || isEmpty(_self.data.routeDetails.arrival.details)) {
            startOrAndEndpositionIsntFilledIn(_self);
        } else {
            await getPossibleRoutes(_self, requestBuilderForSelect);
        }
    };

    function assignTimeToRouteDetailsWhenEmpty(_self) {
        _self.data.routeDetails.time.date.show = _self.formatTimeStampBasedOnLanguage.formatTimeStampForShowingSelect(_self);
        _self.data.routeDetails.time.date.real = moment().locale('en').format('YYYYMMDD');
        _self.data.routeDetails.time.time = _self.data.routeDetails.time.hint.replace(_self.data.routeDetails.time.date.show, '');
    }

    async function getPossibleRoutes(_self, requestBuilderForSelect) {
        await checkIfRouteCanBeFound(_self, requestBuilderForSelect);
    }

    /***************** HANDLE - ROUTES - ERROR *****************/

    async function checkIfRouteCanBeFound(_self, requestBuilderForSelect) {
        let isError = await requestBuilderForSelect.checkIfThereIsAPossibleRoute(_self);
        switch (isError) {
            case null:
                showNoInternetConnection(_self);
                break;
            case true:
                showErrorMessageWhyRouteCantBeFound(_self);
                break;
            case false:
                goToTheResultPage(_self);
                break;
        }
    }

    function goToTheResultPage(_self) {
        stopLoadingModal(_self);
        _self.$goto('Route', {
            props: {
                routeDetails: _self.data.routeDetails,
                timeTable: _self.timeTable,
                indexWithClosestToRealTime: _self.indexWithClosestToRealTime
            }
        });
    }

    /***************** ERROR - MESSAGES *****************/

    function startOrAndEndpositionIsntFilledIn(_self) {
        stopLoadingModal(_self);
        showError(_self, _self.data.error);
    }

    function showErrorMessageWhyRouteCantBeFound(_self) {
        stopLoadingModal(_self);
        showError(_self, _self.timeTable.msg);
    }

    function showNoInternetConnection(_self) {
        stopLoadingModal(_self);
        internetError(_self);
    }

    /***************** HELP - FUNCTIONS *****************/

    function isEmpty(obj) {
        return !obj.hasOwnProperty('routeCode')
    }

    function startLoadingModal(_self, loadingModal) {
        // _self.$showModal(loadingModal);
        indicator.show({
            dimBackground: true,
            hideBezel: true,
            userInteractionEnabled: false,
            mode: Mode.Indeterminate
        });
    }

    function stopLoadingModal(_self) {
        indicator.hide();
        // const page = Frame.topmost();
        // if (page && page.modal) {
        //     page.modal.closeModal()
        // }
    }

    function showError(_self, errorMessage) {
        _self.feedback.error({
            title: "Error",
            message: errorMessage,
            duration: 6000
        })
    }

    function internetError(_self) {
        _self.feedback.warning({
            title: "No Internet Connection",
            message: _self._self.data.internetError,
            duration: 6000
        })
    }

    return {
        checkIfTheValuesAreCorrectBeforeWeCanStartSearchingAfterPossibleRoute,
    }
})();
