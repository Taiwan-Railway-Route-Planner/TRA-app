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
                    chooseTitle: 'Choose your language',
                    button: 'Save'
                },
                otherInfo: {
                    rate: 'Rate us on Google Play',
                    contactUs: 'Email us',
                    openSource: 'Visit the project on Github',
                    Version: 'Version'
                }

            }
        },
        zh: {
            "top": {
                "title": "Settings Menu"
            },
            "center": {
                "language":{
                    "chooseTitle": "Choose your language",
                    "button": "Save"
                },
                "otherInfo": {
                    "rate": "Rate us on Google Play",
                    "contactUs": "Email us",
                    "openSource": "Visit the project on Github",
                    "Version": "Version"
                }
            }
        },
        ko: {
            top: {
                title: '설정메뉴'
            },
            center: {
                language:{
                    chooseTitle: '당신의 언어를 선택하십시오',
                    button: '저장하다'
                },
                otherInfo: {
                    rate: 'Google Play에 대한 평가',
                    contactUs: 'Email을 보내십시오',
                    openSource: 'Github 프로젝트 방문',
                    Version: '버전'
                }
            }
        }
    };

    return {
        language
    }

})();
