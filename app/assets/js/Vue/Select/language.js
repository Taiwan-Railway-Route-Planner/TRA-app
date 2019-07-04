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
                language: 'EN',
                departure: {
                    details: {},
                    hint: 'Select station',
                    label: 'From'
                },
                arrival: {
                    details: {},
                    hint: 'Select station',
                    label: 'To'
                },
                time: {
                    label: 'Time',
                    hint: '',
                    date: '',
                    time: '',
                    local: 'en',
                    modal: {
                        top: {
                            first: 'DEPARTURE',
                            second: 'ARRIVAL',
                        },
                        center: {
                            button: 'Now',
                            date: {
                                actual: null,
                                today: null
                            }
                        },
                        bottom: {
                            leftBtn: 'DISCARD',
                            rightBtn: 'CONFIRM',
                        }
                    }
                },
                button: 'SEARCH'
            }
        },
        zh: {
            searchBar: {
                hintText: {
                    now: '',
                    startStation:  '選擇離開的車站',
                    endStation: '選擇抵達的車站'
                },
                search: ''
            },
            resultDetails: {
                stations: []
            },
            routeDetails: {
                language: 'ZH',
                departure: {
                    details: {},
                    hint: '選擇哪一站',
                    label: '從'
                },
                arrival: {
                    details: {},
                    hint: '選擇哪一站',
                    label: '去'
                },
                time: {
                    label: '時間',
                    hint: '',
                    date: '',
                    time: '',
                    local: 'zh-tw',
                    modal: {
                        top: {
                            first: 'DEPARTURE',
                            second: 'ARRIVAL',
                        },
                        center: {
                            button: 'Now',
                            date: {
                                actual: null,
                                today: null
                            }
                        },
                        bottom: {
                            leftBtn: 'DISCARD',
                            rightBtn: 'CONFIRM',
                        }
                    }
                },
                button: 'SEARCH'
            }
        }
    };


    return {
        language
    }

})();
