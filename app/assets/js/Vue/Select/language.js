/**
 Created by svend on 20/06/2019.
 **/

module.exports = (function () {

    let language = {
        en: {
            "searchBar": {
                "hintText": {
                    "now": "",
                    "startStation":  "Select departure station",
                    "endStation": "Select arrival station"
                },
                "search": ""
            },
            "resultDetails": {
                "stations": []
            },
            "routeDetails": {
                "language": "EN",
                "departure": {
                    "details": {},
                    "hint": "Select station",
                    "label": "From"
                },
                "arrival": {
                    "details": {},
                    "hint": "Select station",
                    "label": "To"
                },
                "time": {
                    "label": "Time",
                    "hint": "",
                    "date": {
                        "show": "",
                        "real": null
                    },
                    "time": "",
                    "local": "en-SG",
                    "modal": {
                        "top": {
                            "first": "DEPARTURE",
                            "second": "ARRIVAL"
                        },
                        "center": {
                            "button": "Now",
                            "date": {
                                "actual": null,
                                "today": null
                            }
                        },
                        "bottom": {
                            "leftBtn": "DISCARD",
                            "rightBtn": "CONFIRM"
                        }
                    }
                },
                "button": "SEARCH"
            },
            "error": "You didn't fill in a destination or departure!"
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
                    date: {
                        show: '',
                        real: null
                    },
                    time: '',
                    local: 'zh-tw',
                    modal: {
                        top: {
                            first: '離開',
                            second: '抵達',
                        },
                        center: {
                            button: '現在',
                            date: {
                                actual: null,
                                today: null
                            }
                        },
                        bottom: {
                            leftBtn: '取消',
                            rightBtn: '確認',
                        }
                    }
                },
                button: '搜尋'
            }
        },
        ko: {
            searchBar: {
                hintText: {
                    now: '',
                    startStation:  '출발역 선택',
                    endStation: '도착역 선택'
                },
                search: ''
            },
            resultDetails: {
                stations: []
            },
            routeDetails: {
                language: 'KO',
                departure: {
                    details: {},
                    hint: '역선택',
                    label: '출발'
                },
                arrival: {
                    details: {},
                    hint: '역선택',
                    label: '도착'
                },
                time: {
                    label: '시간',
                    hint: '',
                    date: {
                        show: '',
                        real: null
                    },
                    time: '',
                    local: 'ko',
                    modal: {
                        top: {
                            first: '출발',
                            second: '도착',
                        },
                        center: {
                            button: '현재',
                            date: {
                                actual: null,
                                today: null
                            }
                        },
                        bottom: {
                            leftBtn: '버리다',
                            rightBtn: '확정하다',
                        }
                    }
                },
                button: '찾다'
            }
        },
    };


    return {
        language
    }

})();
