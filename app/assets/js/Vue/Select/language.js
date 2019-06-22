/**
 Created by svend on 20/06/2019.
 **/

module.exports = (function () {

    let language = {
        en: {
            searchBar: {
                hintText: {
                    now: '',
                    startStation:  'Choose your departure station',
                    endStation: 'Choose your arrival station'
                },
                search: ''
            },
            resultDetails: {
                stations: []
            },
            routeDetails: {
                departure: {},
                arrival: {}
            }
        },
        zh: {
            searchBar: {
                hintText: {
                    now: '',
                    startStation:  '',
                    endStation: ''
                },
                search: null
            },
            resultDetails: {
                stations: []
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
