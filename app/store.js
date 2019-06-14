import Vue from 'vue';
import Vuex from 'vuex';
import localStorage from 'nativescript-localstorage';

const NSVuexPersistent = store => {
    let storageStr = localStorage.getItem('ns-vuex-persistent');
    if (storageStr) {
        store.replaceState(JSON.parse(storageStr))
    }
    store.subscribe((mutation, state) => {
        // Suscribe hook.
        localStorage.setItem('ns-vuex-persistent', JSON.stringify(state));
    })
};

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        language: null
    },
    plugins: [NSVuexPersistent],
    mutations: {
        updateLanguage(state, newLanguage) {
            state.language = newLanguage;
        },
    },
    actions: {}
});
