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
        language: null,
        stations: null,
        searchFile: null,
        forceUpdate: false
    },
    plugins: [NSVuexPersistent],
    mutations: {
        updateLanguage(state, newLanguage) {
            state.language = newLanguage;
        },
        updateStation(state, newStations){
            state.stations = newStations;
        },
        updateSearchFile(state, newSearchFile){
            state.searchFile = newSearchFile;
        },
        forceUpdateStationInfo(state, status){
            state.forceUpdate = status;
        }
    }
});
