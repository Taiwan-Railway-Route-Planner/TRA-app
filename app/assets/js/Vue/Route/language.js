/**
 Created by svend on 11/07/2019.
 **/

module.exports = (function () {

    let language = {
        en: {
            "top": {
                "first": "Departure Station",
                "second": "Arrival Station"
            },
            "trainTypes": {
                "Local": {
                    "name": "Local",
                    "color": "#333333"
                },
                "Other Local": {
                    "name": "Ordinary",
                    "color": "#333333"
                },
                "Fast Local": {
                    "name": "Fast Local",
                    "color": "#333333"
                },
                "Chu-kuang": {
                    "name": "Chu-kuang",
                    "color": "#FFD200"
                },
                "Tze-chiang": {
                    "name": "Tze-chiang",
                    "color": "#FF8708"
                },
                "Fu-Hsing": {
                    "name": "Fu-Hsing",
                    "color": "#00ace8"
                },
                "Taroko": {
                    "name": "Taroko",
                    "color": "#FF5000"
                },
                "Puyuma": {
                    "name": "Puyuma",
                    "color": "#D00216"
                }
            },
            "details": {
                "top": {
                    "title": "Travel Details"
                },
                "price": {
                    "single": "Single Ticket",
                    "ePrice": "E-ticket",
                }
            },
            "stopDetails": {
                "top": {
                    "title": "Train Details",
                    "type": "Type",
                    "number": "Number"
                }
            }
        },
        zh: {
            top: {
                first: '離開站',
                second: '抵達站'
            },
            trainTypes: {
                "Local": {
                    name: "區間",
                    color: "#333333"
                },
                "Other Local": {
                    name: "普快",
                    color: "#333333"
                },
                "Fast Local": {
                    name: "區間快",
                    color: "#333333"
                },
                "Chu-kuang": {
                    name: "莒光",
                    color: "#FFD200"
                },
                "Tze-chiang": {
                    name: "自強",
                    color: "#FF8708"
                },
                "Fu-Hsing": {
                    name: "復興",
                    color: "#00ace8"
                },
                "Taroko": {
                    name: "太魯閣",
                    color: "#FF5000"
                },
                "Puyuma": {
                    name: "普悠瑪",
                    color: "#D00216"
                }
            },
            "details": {
                "top": {
                    "title": "旅行細節"
                },
                "price": {
                    "single": "單程票",
                    "ePrice": "電子票證",
                }
            },
            "stopDetails": {
                "top": {
                    "title": "火車詳情",
                    "type": "類型",
                    "number": "班次號碼"
                }
            }
        },
        ko: {
            top: {
                first: '출발역',
                second: '도착역'
            },
            trainTypes: {
                "Local": {
                    name: "Local",
                    color: "#333333"
                },
                "Other Local": {
                    name: "Ordinary",
                    color: "#333333"
                },
                "Fast Local": {
                    name: "Fast Local",
                    color: "#333333"
                },
                "Chu-kuang": {
                    name: "Chu-kuang",
                    color: "#FFD200"
                },
                "Tze-chiang": {
                    name: "Tze-chiang",
                    color: "#FF8708"
                },
                "Fu-Hsing": {
                    name: "Fu-Hsing",
                    color: "#00ace8"
                },
                "Taroko": {
                    name: "Taroko",
                    color: "#FF5000"
                },
                "Puyuma": {
                    name: "Puyuma",
                    color: "#D00216"
                }
            },
            details: {
                top: {
                    title: '여행내역'
                },
                price: {
                    single: "승차권 편도",
                    ePrice: "전자 티켓",
                }
            },
            stopDetails: {
                top: {
                    title: '열차 내역',
                    type: '유형',
                    number: '번호'
                }
            }
        },
        nl: {
            top: {
                "first": "Van",
                "second": "Naar"
            },
            trainTypes: {
                "Local": {
                    name: "Local",
                    color: "#333333"
                },
                "Other Local": {
                    name: "Ordinary",
                    color: "#333333"
                },
                "Fast Local": {
                    name: "Fast Local",
                    color: "#333333"
                },
                "Chu-kuang": {
                    name: "Chu-kuang",
                    color: "#FFD200"
                },
                "Tze-chiang": {
                    name: "Tze-chiang",
                    color: "#FF8708"
                },
                "Fu-Hsing": {
                    name: "Fu-Hsing",
                    color: "#00ace8"
                },
                "Taroko": {
                    name: "Taroko",
                    color: "#FF5000"
                },
                "Puyuma": {
                    name: "Puyuma",
                    color: "#D00216"
                }
            },
            details: {
                top: {
                    "title": "Reisgegevens"
                },
                price: {
                    single: "Enkel Ticket",
                    ePrice: "E-ticket",
                }
            },
            stopDetails: {
                top: {
                    "title": "Trein Details",
                    "type": "Type",
                    "number": "Nummer"
                }
            }
        },
        es: {
            top: {
                "first": "Estación de origen",
                "second": "Estación de destino"
            },
            trainTypes: {
                "Local": {
                    name: "Local",
                    color: "#333333"
                },
                "Other Local": {
                    name: "Ordinary",
                    color: "#333333"
                },
                "Fast Local": {
                    name: "Fast Local",
                    color: "#333333"
                },
                "Chu-kuang": {
                    name: "Chu-kuang",
                    color: "#FFD200"
                },
                "Tze-chiang": {
                    name: "Tze-chiang",
                    color: "#FF8708"
                },
                "Fu-Hsing": {
                    name: "Fu-Hsing",
                    color: "#00ace8"
                },
                "Taroko": {
                    name: "Taroko",
                    color: "#FF5000"
                },
                "Puyuma": {
                    name: "Puyuma",
                    color: "#D00216"
                }
            },
            details: {
                top: {
                    "title": "Detalles del recorrido"
                },
                price: {
                    single: "Billete físico",
                    ePrice: "Billete electrónico"
                }
            },
            stopDetails: {
                top: {
                    "title": "Detalles del tren",
                    "type": "Tipo",
                    "number": "Número"
                }

            }
        },
        de: {
            top: {
                "first": "Abfahrtshaltestelle",
                "second": "Ankunftshaltestelle"
            },
            trainTypes: {
                "Local": {
                    name: "Local",
                    color: "#333333"
                },
                "Other Local": {
                    name: "Ordinary",
                    color: "#333333"
                },
                "Fast Local": {
                    name: "Fast Local",
                    color: "#333333"
                },
                "Chu-kuang": {
                    name: "Chu-kuang",
                    color: "#FFD200"
                },
                "Tze-chiang": {
                    name: "Tze-chiang",
                    color: "#FF8708"
                },
                "Fu-Hsing": {
                    name: "Fu-Hsing",
                    color: "#00ace8"
                },
                "Taroko": {
                    name: "Taroko",
                    color: "#FF5000"
                },
                "Puyuma": {
                    name: "Puyuma",
                    color: "#D00216"
                }
            },
            details: {
                top: {
                    "title": "Details zur Reise"
                },
                price: {
                    "single": "Papier-Fahrkarte",
                    "ePrice": "E-Ticket"
                }
            },
            stopDetails: {
                top: {
                    "title": "Details zum Zug",
                    "type": "Typ",
                    "number": "Nummer"
                }

            },
        },
        fr: {
            top: {
                "first": "Gare de départ",
                "second": "Gare d'arrivée"
            },
            trainTypes: {
                "Local": {
                    name: "Local",
                    color: "#333333"
                },
                "Other Local": {
                    name: "Ordinary",
                    color: "#333333"
                },
                "Fast Local": {
                    name: "Fast Local",
                    color: "#333333"
                },
                "Chu-kuang": {
                    name: "Chu-kuang",
                    color: "#FFD200"
                },
                "Tze-chiang": {
                    name: "Tze-chiang",
                    color: "#FF8708"
                },
                "Fu-Hsing": {
                    name: "Fu-Hsing",
                    color: "#00ace8"
                },
                "Taroko": {
                    name: "Taroko",
                    color: "#FF5000"
                },
                "Puyuma": {
                    name: "Puyuma",
                    color: "#D00216"
                }
            },
            details: {
                top: {
                    "title": "Détails du voyage"
                },
                price: {
                    "single": "Billet papier",
                    "ePrice": "E-ticket"
                }
            },
            stopDetails: {
                top: {
                    "title": "Détails du train",
                    "type": "Type",
                    "number": "Nombre"
                }

            }
        },
        ar: {
            top: {
                "first": "Մեկնման կայարան",
                "second": "Ժամանման կայարան"
            },
            trainTypes: {
                "Local": {
                    name: "Local",
                    color: "#333333"
                },
                "Other Local": {
                    name: "Ordinary",
                    color: "#333333"
                },
                "Fast Local": {
                    name: "Fast Local",
                    color: "#333333"
                },
                "Chu-kuang": {
                    name: "Chu-kuang",
                    color: "#FFD200"
                },
                "Tze-chiang": {
                    name: "Tze-chiang",
                    color: "#FF8708"
                },
                "Fu-Hsing": {
                    name: "Fu-Hsing",
                    color: "#00ace8"
                },
                "Taroko": {
                    name: "Taroko",
                    color: "#FF5000"
                },
                "Puyuma": {
                    name: "Puyuma",
                    color: "#D00216"
                }
            },
            details: {
                top: {
                    "title": "Ուղևորության տվյալներ"
                },
                price: {
                    "single": "Միակողմանի տոմս",
                    "ePrice": "Էլեկտրոնային տոմս"
                }
            },
            stopDetails: {
                top: {
                    "title": "Գնացքի տվյալներ",
                    "type": "Տեսակ",
                    "number": "Համար"
                }

            }
        },
        ru: {
            top: {
                "first": "Станция отправления",
                "second": "Станция прибытия"
            },
            trainTypes: {
                "Local": {
                    name: "Local",
                    color: "#333333"
                },
                "Other Local": {
                    name: "Ordinary",
                    color: "#333333"
                },
                "Fast Local": {
                    name: "Fast Local",
                    color: "#333333"
                },
                "Chu-kuang": {
                    name: "Chu-kuang",
                    color: "#FFD200"
                },
                "Tze-chiang": {
                    name: "Tze-chiang",
                    color: "#FF8708"
                },
                "Fu-Hsing": {
                    name: "Fu-Hsing",
                    color: "#00ace8"
                },
                "Taroko": {
                    name: "Taroko",
                    color: "#FF5000"
                },
                "Puyuma": {
                    name: "Puyuma",
                    color: "#D00216"
                }
            },
            details: {
                top: {
                    "title": "Данные путешествия"
                },
                price: {
                    "single": "Билет в одну сторону",
                    "ePrice": "Электронный билет"
                }
            },
            stopDetails: {
                top: {
                    "title": "Данные поезда",
                    "type": "Тип",
                    "number": "Номер"
                }

            }
        }
    };

    return {
        language
    }

})();
