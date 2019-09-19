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
                language: {
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
                "title": "設定功能表"
            },
            "center": {
                "language": {
                    "chooseTitle": "選擇你的語言",
                    "button": "保存"
                },
                "otherInfo": {
                    "rate": "在Google Play上為我們評分",
                    "contactUs": "電郵我們",
                    "openSource": "訪問Github上的項目",
                    "Version": "版"
                }
            }
        },
        ko: {
            top: {
                title: '설정메뉴'
            },
            center: {
                language: {
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
        },
        nl: {
            "top": {
                "title": "Instellingen"
            },
            "center": {
                "language": {
                    "chooseTitle": "Kies uw taal",
                    "button": "Opslaan"
                },
                "otherInfo": {
                    "rate": "Beoordeel ons op Google Play",
                    "contactUs": "Mail ons",
                    "openSource": "Bezoek het project op Github",
                    "Version": "Versie"
                }
            }
        },
        es: {
            "top": {
                "title": "Opciones"
            },
            "center": {
                "language":{
                    "chooseTitle": "Selecciona un idioma",
                    "button": "Guardar"
                },
                "otherInfo": {
                    "rate": "Calificamos en Google Play",
                    "contactUs": "Contacta con nosotros mediante email",
                    "openSource": "Visita la página del proyecto en Github",
                    "Version": "Versión"
                }
            }
        }
    };

    return {
        language
    }

})();
