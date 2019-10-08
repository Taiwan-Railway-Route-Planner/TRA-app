/**
 Created by svend on 14/06/2019.
 **/

const requestBuilderForSelect = require("./SetUp/requestBuilderForSelect");
const initScreen = require("./SetUp/initScreen");
const handleNavigationForResults = require("./SetUp/handleNavigationForResults");

const FeedbackPlugin = require("nativescript-feedback");
const feedback = new FeedbackPlugin.Feedback();

import {topmost} from "ui/frame"

export default (function () {

    const setUpSelectVue = async function (_self) {
        assignVariables(_self);
        await initScreen.initScreen(_self, requestBuilderForSelect);
    };

    async function controlValuesBeforeGoingToRoute(_self, loadingModal) {
        await handleNavigationForResults.checkIfTheValuesAreCorrectBeforeWeCanStartSearchingAfterPossibleRoute(_self, loadingModal, requestBuilderForSelect)
    }

    function assignVariables(_self) {
        _self.feedback = feedback;
        _self.topmost = topmost;
    }

    const checkFirstIfTheElementsArentEmpty = async function (_self) {
        if (_self.filteredStations === null) {
            await initScreen.loadStationDetails(_self, requestBuilderForSelect);
            if (_self.filteredStations === null) {
                internetError(_self);
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    };

    const changeTheDefaultCounty = function (_self, prop, ref) {
        if (_self.selectedCounty.name === null){
            _self.hideThis = true;
            setNotFilledOrFilled(true, ref);
            hideElementShowSelected(prop, ref);
            setTheNewSelectedCounty(_self, prop);
        } else {
            if (prop === "all"){
                _self.hideThis = false;
                showElementBack(_self.selectedCounty.prop, ref);
                setNotFilledOrFilled(false, ref);
                _self.selectedCounty.name = null;
            } else {
                _self.hideThis = true;
                hideElementShowSelected(prop, ref);
                showElementBack(_self.selectedCounty.prop, ref);
                setTheNewSelectedCounty(_self, prop);
            }
        }
        ref["countiesList"].nativeView.scrollToHorizontalOffset(0, true);
    };

    /***************** HELP - FUNCTIONS *****************/

    function internetError(_self) {
        _self.feedback.warning({
            title: _self.data.internetError,
            duration: 6000
        })
    }

    function setTheNewSelectedCounty(_self, prop) {
        _self.selectedCounty = {};
        _self.selectedCounty.prop = prop;
        _self.selectedCounty.name = _self.$store.state.language === 'ZH' ?
            _self.data.stationInfo.counties[prop].縣市 : _self.data.stationInfo.counties[prop].eng縣市;
    }

    function setNotFilledOrFilled(status, ref) {
        ref['all'].nativeView.className = status ? 'fas' : "fas filled";
    }

    function hideElementShowSelected(prop, ref) {
        ref[prop].nativeView.visibility = 'collapse';
    }

    function showElementBack(prevProp, ref) {
        ref[prevProp].nativeView.visibility = 'visible';
    }

    return {
        setUpSelectVue,
        controlValuesBeforeGoingToRoute,
        checkFirstIfTheElementsArentEmpty,
        changeTheDefaultCounty
    }

})();
