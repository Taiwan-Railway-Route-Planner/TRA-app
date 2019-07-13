/**
 Created by svend on 11/07/2019.
 **/

module.exports = (function () {

    let language = {
        en: {
            top: {
                first: 'Departure Station',
                second: 'Arrival Station'
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
                    title: 'Travel Details'
                }
            },
            stopDetails: {
                top: {
                    title: 'Train Details'
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
            details: {
                top: {
                    title: 'Travel Details'
                }
            },
            stopDetails: {
                top: {
                    title: 'Train Details'
                }
            }
        }
    };

    return {
        language
    }

})();
