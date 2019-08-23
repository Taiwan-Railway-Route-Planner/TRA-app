/**
 Created by svend on 14/06/2019.
 **/

const requestBuilderForSelect = require("./requestBuilderForSelect");
const initScreen = require("./initScreen");
const handleNavigationForResults = require("./handleNavigationForResults");

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

    return {
        setUpSelectVue,
        controlValuesBeforeGoingToRoute
    }

})();
