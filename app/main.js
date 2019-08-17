import Vue from 'nativescript-vue'
import App from './components/App'
import Select from './components/Select/StationSelect'
import Route from "./components/Route/RouteSelect"
import RouteDetails from "./components/Route/Details"
import MultiRouteDetails from "./components/Route/Transfers/DetailsTransfers"
import RouteStopDetails from "./components/Route/StopDetails"
import Settings from "./components/Settings/Settings"
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
  Bootup: App,
  Select: Select,
  Route: Route,
  RouteDetails: RouteDetails,
  MultiRouteDetails: MultiRouteDetails,
  RouteStopDetails: RouteStopDetails,
  Settings: Settings
};

Vue.prototype.$router = router;

Vue.prototype.$goto = function (to, props = null) {
  this.$navigateTo(this.$router[to], props)
};

new Vue({
  store,
  render: h => h('frame', [h(Select)])
}).$start();
