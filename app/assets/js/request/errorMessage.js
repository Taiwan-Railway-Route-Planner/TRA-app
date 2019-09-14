/**
 Created by svend on 14/06/2019.
 **/

module.exports = (function () {

    const messages = {
        en: {
            stations: "Please, Try again later!",
            route: "We can't find any route for that day!"
        },
        zh: {
            stations: "沒有網絡連接",
            route: "那天我們找不到任何路線"
        },
        ko: {
            stations: "나중에 다시 시도하세요!",
            route: "우리는 그 날에 대한 경로를 찾을 수 없습니다!"
        },
        nl: {
            stations: "Gelieve later nog eens te proberen!",
            route: "Geen route mogelijk voor die dag!"
        }
    };

    return {
        messages
    }

})();
