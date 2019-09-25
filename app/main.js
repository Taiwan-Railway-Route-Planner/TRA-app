import Vue from 'nativescript-vue'
import Bootup from './components/App'
import Select from './components/Select/StationSelect'
import Route from "./components/Route/RouteSelect"
import RouteDetails from "./components/Route/SingleTrain/Details"
import MultiRouteDetails from "./components/Route/Transfers/DetailsTransfers"
import RouteStopDetails from "./components/Route/StopDetails"
import Settings from "./components/Settings/Settings"
import Support from "./components/Support/Support"
import store from './store';

import { Gif } from "nativescript-gif";

import VueDevtools from 'nativescript-vue-devtools'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

Vue.filter('unescape', v => unescape(v));

Vue.registerElement("Gif", () => Gif);

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
