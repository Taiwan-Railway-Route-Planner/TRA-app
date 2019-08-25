/**
 Created by svend on 14/06/2019.
 **/

const requestBuilderForSelect = require("./SetUp/requestBuilderForSelect");
const initScreen = require("./SetUp/initScreen");
const handleNavigationForResults = require("./SetUp/handleNavigationForResults");

const FeedbackPlugin = require("nativescript-feedback");
const feedback = new FeedbackPlugin.Feedback();

import { topmost } from "ui/frame"

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

    const checkFirstIfTheElementsArentEmpty = function (_self) {
        if (typeof _self.filteredStations !== 'undefined'){
            internetError(_self);
            return false;
        } else {
            return true;
        }
    };

    /***************** HELP - FUNCTIONS *****************/

    function internetError(_self) {
        _self.feedback.warning({
            title: "No Internet Connection",
            duration: 6000
        })
    }

    return {
        setUpSelectVue,
        controlValuesBeforeGoingToRoute,
        checkFirstIfTheElementsArentEmpty
    }

})();
