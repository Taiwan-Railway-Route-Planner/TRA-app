/**
 Created by svend on 20/06/2019.
 **/

module.exports = (function () {

    let language = {
        en: {
            searchBar: {
                hintText: {
                    now: '',
                    startStation:  'Select departure station',
                    endStation: 'Select arrival station'
                },
                search: ''
            },
            resultDetails: {
                stations: []
            },
            routeDetails: {
                departure: {
                    details: {},
                    hint: 'Select station',
                    label: 'From'
                },
                arrival: {
                    details: {},
                    hint: 'Select station',
                    label: 'To'
                }
            }
        },
        zh: {
            searchBar: {
                hintText: {
                    now: '',
                    startStation:  '選擇出進的站',
                    endStation: '選擇入境抵達的站'
                },
                search: null
            },
            resultDetails: {
                stations: []
            },
            routeDetails: {
                departure: {
                    details: {},
                    hint: '選擇那一站',
                    label: '從'
                },
                arrival: {
                    details: {},
                    hint: '選擇那一站',
                    label: '去'
                }
            }
        }
    };


    return {
        language
    }

})();
