import Vue from 'nativescript-vue'
import App from './components/App'
import Select from './components/Select/StationSelect'
import Route from "./components/Route/RouteSelect"
import store from './store';

import VueDevtools from 'nativescript-vue-devtools'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

Vue.filter('unescape', v => unescape(v));

const router = {
  Settings: App,
  Select: Select,
  Route: Route
};

Vue.prototype.$router = router;

Vue.prototype.$goto = function (to, props = null) {
  this.$navigateTo(this.$router[to], props)
};

new Vue({
  store,
  render: h => h('frame', [h(Route)])
}).$start();
