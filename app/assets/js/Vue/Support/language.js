/**
 Created by svend on 25/09/2019.
 **/

module.exports = (function () {

    let language = {
        en: {
            top: {
                title: "Information"
            },
            information: {
                intro: "If you want to help, you can help translating the following languages:",
                btn: "Help translating"
            },
            thanks:{
                intro: "I would like to thank the following persons for helping translating:"
            }
        },
        zh: {
            top: {
                title: ""
            },
            information: {
                intro: "",
                btn: ""
            },
            thanks:{
                intro: ""
            }
        },
        ko: {
            top: {
                title: "정보"
            },
            information: {
                intro: "도움이 필요하면 다음 언어를 번역하는 데 도움이 될 수 있습니다.",
                btn: "번역 도움말"
            },
            thanks:{
                intro: "번역에 도움을 주신 다음 분들께 감사드립니다."
            }
        },
        nl: {
            top: {
                title: "Informatie"
            },
            information: {
                intro: "Als je wilt helpen, kan je helpen met het vertalen naar een van de volgende talen:",
                btn: "Help met vertalen"
            },
            thanks:{
                intro: "Ik wil graag de volgende personen bedanken voor te helpen met vertalen:"
            }
        },
        es: {
            top: {
                title: ""
            },
            information: {
                intro: "",
                btn: ""
            },
            thanks:{
                intro: ""
            }
        }
    };

    return {
        language
    }

})();
