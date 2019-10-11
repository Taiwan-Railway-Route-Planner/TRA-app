/**
 Created by svend on 20/06/2019.
 **/

module.exports = (function () {

    let language = {
        en: {
            "searchBar": {
                "hintText": {
                    "now": "",
                    "startStation": "Select departure station",
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
            "error": "You didn't fill in a destination or departure!",
            "internetError": "No internet connection!"
        },
        zh: {
            searchBar: {
                hintText: {
                    now: '',
                    startStation: '選擇離開的車站',
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
            },
            error: "離開的站!",
            internetError: "沒有網絡連接!"
        },
        ko: {
            searchBar: {
                hintText: {
                    now: '',
                    startStation: '출발역 선택',
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
            },
            error: "목적지나 출발을 입력하지 않았습니다!",
            internetError: "인터넷에 연결되지 않음!"
        },
        nl: {
            searchBar: {
                hintText: {
                    now: '',
                    "startStation": "Van",
                    "endStation": "Naar"
                },
                search: ''
            },
            resultDetails: {
                stations: []
            },
            routeDetails: {
                language: 'NL',
                departure: {
                    details: {},
                    "hint": "Kies een station",
                    "label": "Van"
                },
                arrival: {
                    details: {},
                    "hint": "Kies een station",
                    "label": "Naar"
                },
                time: {
                    "label": "Tijd",
                    hint: '',
                    date: {
                        show: '',
                        real: null
                    },
                    time: '',
                    local: 'nl',
                    modal: {
                        top: {
                            "first": "VERTREK",
                            "second": "AANKOMST"
                        },
                        center: {
                            "button": "Nu",
                            date: {
                                actual: null,
                                today: null
                            }
                        },
                        bottom: {
                            "leftBtn": "ANNULEREN",
                            "rightBtn": "BEVESTIGEN"
                        }
                    }
                },
                "button": "ZOEKEN"
            },
            error: "Je moet je VAN en NAAR invullen!",
            internetError: "Geen internetverbinding!"
        },
        es: {
            searchBar: {
                hintText: {
                    now: '',
                    "startStation": "Selecciona la estación de origen",
                    "endStation": "Selecciona la estación de destino"
                },
                search: ''
            },
            resultDetails: {
                stations: []
            },
            routeDetails: {
                language: 'ES',
                departure: {
                    details: {},
                    "hint": "Escoge una estación",
                    "label": "Origen"
                },
                arrival: {
                    details: {},
                    "hint": "Escoge una estación",
                    "label": "Destino"
                },
                time: {
                    "label": "Fecha y hora",
                    hint: '',
                    date: {
                        show: '',
                        real: null
                    },
                    time: '',
                    local: 'es',
                    modal: {
                        top: {
                            "first": "Salida",
                            "second": "Llegada"
                        },
                        center: {
                            "button": "Ahora",
                            date: {
                                actual: null,
                                today: null
                            }
                        },
                        bottom: {
                            "leftBtn": "Descartar",
                            "rightBtn": "Confirmar"
                        }
                    }
                },
                "button": "Buscar"
            },
            "error": "¡No has seleccionado estación de origen o destino!",
            "internetError": "¡No hay conexión a internet!"
        },
        de: {
            searchBar: {
                hintText: {
                    now: '',
                    "startStation": "Wähle eine Abfahrtshaltestelle",
                    "endStation": "Wähle eine Ankunftshaltestelle"
                },
                search: ''
            },
            resultDetails: {
                stations: []
            },
            routeDetails: {
                language: 'DE',
                departure: {
                    details: {},
                    "hint": "Wähle eine Haltestelle",
                    "label": "Von"
                },
                arrival: {
                    details: {},
                    "hint": "Wähle eine Haltestelle",
                    "label": "Zu"
                },
                time: {
                    "label": "Abfahrtszeitpunkt",
                    hint: '',
                    date: {
                        show: '',
                        real: null
                    },
                    time: '',
                    local: 'de',
                    modal: {
                        top: {
                            "first": "ABFAHRT",
                            "second": "ANKUNFT"
                        },
                        center: {
                            "button": "Jetzt",
                            date: {
                                actual: null,
                                today: null
                            }
                        },
                        bottom: {
                            "leftBtn": "VERWERFEN",
                            "rightBtn": "BESTÄTIGEN"
                        }
                    }
                },
                "button": "SUCHE"
            },
            "error": "Du hast kein Ziel oder einen Startpunkt angegeben!",
            "internetError": "Keine Internetverbindung !"
        },
        fr: {
            searchBar: {
                hintText: {
                    now: '',
                    "startStation": "Sélectionnez la gare de départ",
                    "endStation": "Sélectionnez la gare d'arrivée"
                },
                search: ''
            },
            resultDetails: {
                stations: []
            },
            routeDetails: {
                language: 'FR',
                departure: {
                    details: {},
                    "hint": "Choisissez votre station",
                    "label": "Départ"
                },
                arrival: {
                    details: {},
                    "hint": "Choisissez votre station",
                    "label": "Arrivée"
                },
                time: {
                    "label": "L'heure",
                    hint: '',
                    date: {
                        show: '',
                        real: null
                    },
                    time: '',
                    local: 'fr',
                    modal: {
                        top: {
                            "first": "DÉPART",
                            "second": "ARRIVÉE"
                        },
                        center: {
                            "button": "Maintenant",
                            date: {
                                actual: null,
                                today: null
                            }
                        },
                        bottom: {
                            "leftBtn": "ANNULER",
                            "rightBtn": "ACCEPTER"
                        }
                    }
                },
                "button": "RECHERCHER"
            },
            "error": "Vous n'avez pas renseigné de destination ou de départ!",
            "internetError": "Pas de connexion Internet!"
        },
        ar: {
            searchBar: {
                hintText: {
                    now: '',
                    "startStation": "Ընտրել մեկնման կայարանը",
                    "endStation": "Ընտրել ժամանման կայարանը"
                },
                search: ''
            },
            resultDetails: {
                stations: []
            },
            routeDetails: {
                language: 'AR',
                departure: {
                    details: {},
                    "hint": "Ընտրել կայարանը",
                    "label": "Որտեղից"
                },
                arrival: {
                    details: {},
                    "hint": "Ընտրել կայարանը",
                    "label": "Ուր"
                },
                time: {
                    "label": "Օրը և ժամը",
                    hint: '',
                    date: {
                        show: '',
                        real: null
                    },
                    time: '',
                    local: 'hy-am',
                    modal: {
                        top: {
                            "first": "ՄԵԿՆՈՒՄ",
                            "second": "ԺԱՄԱՆՈՒՄ"
                        },
                        center: {
                            "button": "Հիմա",
                            date: {
                                actual: null,
                                today: null
                            }
                        },
                        bottom: {
                            "leftBtn": "ՀԵՐՔԵԼ",
                            "rightBtn": "ՀԱՍՏԱՏԵԼ"
                        }
                    }
                },
                "button": "ՓՆՏՐԵԼ"
            },
            "error": "Մեկնման կամ ժամանման վայրը լրացված չէ:",
            "internetError": "Ինտերնետ կապ չկա:"
        },
        ru: {
            searchBar: {
                hintText: {
                    now: '',
                    "startStation": "Выбрать станцию отправления",
                    "endStation": "Выбрать станцию прибытия"
                },
                search: ''
            },
            resultDetails: {
                stations: []
            },
            routeDetails: {
                language: 'RU',
                departure: {
                    details: {},
                    "hint": "Выбрать станцию",
                    "label": "Откуда"
                },
                arrival: {
                    details: {},
                    "hint": "Выбрать станцию",
                    "label": "Куда"
                },
                time: {
                    "label": "Время",
                    hint: '',
                    date: {
                        show: '',
                        real: null
                    },
                    time: '',
                    local: 'ru',
                    modal: {
                        top: {
                            "first": "ОТПРАВЛЕНИЕ",
                            "second": "ПРИБЫТИЕ"
                        },
                        center: {
                            "button": "СЕЙЧАС",
                            date: {
                                actual: null,
                                today: null
                            }
                        },
                        bottom: {
                            "leftBtn": "ОТМЕНИТЬ",
                            "rightBtn": "ПОДТВЕРДИТЬ"
                        }
                    }
                },
                "button": "НАЙТИ"
            },
            "error": "Станция отправления или прибытия не заполнены!",
            "internetError": "Нет интернет связи!"
        }
    };


    return {
        language
    }

})();
