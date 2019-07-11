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
                "Local": "Local",
                "Chu-kuang": "Chu-kuang",
                "Tze-chiang": "Tze-chiang",
                "Taroko": "Taroko",
                "Puyuma": "Puyuma"
            }
        },
        zh: {
            top: {
                first: 'Departure Station',
                second: 'Arrival Station'
            },
            trainTypes: {
                "Local": "區間",
                "Chu-kuang": "莒光",
                "Tze-chiang": "自強",
                "Taroko": "太魯閣",
                "Puyuma": "普悠瑪"
            }
        }
    };

    return {
        language
    }

})();
