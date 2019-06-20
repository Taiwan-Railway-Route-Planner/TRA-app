/**
 Created by svend on 20/06/2019.
 **/

module.exports = (function () {

    let language = {
        en: {
            stationInfo: null,
            searchBar: {
                hintText: {
                    now: '',
                    startStation:  'Choose your departure station',
                    endStation: 'Choose your arrival station'
                },
                search: null
            },
            routeDetails: {
                departure: {},
                arrival: {}
            }
        },
        zh: {
            stationInfo: null,
            searchBar: {
                hintText: {
                    now: '',
                    startStation:  '',
                    endStation: ''
                },
                search: null
            },
            routeDetails: {
                departure: {},
                arrival: {}
            }
        }
    };


    return {
        language
    }

})();
