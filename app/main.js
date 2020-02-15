import Vue from 'nativescript-vue'
import Bootup from './containers/app/app.container'
import Select from './containers/choice-menu/station-select.container'
import Route from "./containers/route-list-overview/route-list-overview.container"
import RouteDetails from "./containers/single-route-details/single-route-details.container"
import MultiRouteDetails from "./containers/transfer-route-details/transfer-route-details.container"
import RouteStopDetails from "./containers/train-stop-details/train-stop-details"
import Settings from "./containers/settings/settings.container"
import Support from "./containers/support/support.container"
import store from './store';

import {Gif} from "nativescript-gif";

import VueDevtools from 'nativescript-vue-devtools'


if (TNS_ENV !== 'production') {
    Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

Vue.filter('unescape', v => unescape(v));

Vue.registerElement("Gif", () => Gif);

import {Label} from "tns-core-modules/ui/label";

class ScalingLabel extends Label {
    initNativeView() {
        super.initNativeView();
        if (this.android) {
            if (androidx)
                androidx.core.widget.TextViewCompat.setAutoSizeTextTypeUniformWithConfiguration(this.nativeViewProtected, 10, 100, 1, android.util.TypedValue.COMPLEX_UNIT_SP);
            else {
                android.support.v4.widget.TextViewCompat.setAutoSizeTextTypeUniformWithConfiguration(this.nativeViewProtected, 10, 100, 1, android.util.TypedValue.COMPLEX_UNIT_SP);
            }
            // androidx.core.widget.TextViewCompat.setAutoSizeTextTypeUniformWithConfiguration(this.nativeViewProtected, 10, 100, 1, android.util.TypedValue.COMPLEX_UNIT_SP);
        }
    }
}

Vue.registerElement('ScalingLabel', () => ScalingLabel);

const router = {
    Bootup: Bootup,
    Select: Select,
    Route: Route,
    RouteDetails: RouteDetails,
    MultiRouteDetails: MultiRouteDetails,
    RouteStopDetails: RouteStopDetails,
    Settings: Settings,
    Support: Support
};

Vue.prototype.$router = router;

Vue.prototype.$goto = function (to, props = null) {
    this.$navigateTo(this.$router[to], props)
};

new Vue({
    store,
    render: h => h('frame', [h(store.state.language !== null ? Select : Bootup)])
}).$start();
