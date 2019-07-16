/**
 Created by svend on 14/07/2019.
 **/

module.exports = (function () {

    let language = {
        en: {
            top: {
                title: 'Settings Menu'
            },
            center: {
                language:{
                    chooseTitle: 'Choose your language'
                },
                otherInfo: {
                    rate: 'Rate us on Google Play',
                    contactUs: 'Email us',
                    Version: 'Version'
                }

            }
        },
        zh: {
            top: {
                title: 'Settings Menu'
            },
            center: {
                language:{
                    chooseTitle: 'Choose your language'
                },
                otherInfo: {
                    rate: 'Rate us on Google Play',
                    contactUs: 'Email us',
                    Version: 'Version'
                }
            }
        },
        ko: {
            top: {
                title: '설정메뉴'
            },
            center: {
                language:{
                    chooseTitle: '당신의 언어를 선택하십시오'
                },
                otherInfo: {
                    rate: 'Rate us on Google Play',
                    contactUs: 'Email us',
                    Version: 'Version'
                }
            }
        }
    };

    return {
        language
    }

})();
