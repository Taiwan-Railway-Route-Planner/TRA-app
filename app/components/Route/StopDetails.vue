<template>
    <Page actionBarHidden="true">
        <DockLayout>
            <FlexboxLayout dock="top" class="dock-top">
                <FlexboxLayout class="top">
                    <FlexboxLayout class="top-title" @tap="navigateBack()">
                        <Label class="fas" :text="'\uf060' | unescape"></Label>
                        <Label :text="props.language.stopDetails.top.title"></Label>
                    </FlexboxLayout>
                    <FlexboxLayout class="trainGeneral">
                        <FlexboxLayout class="element">
                            <Label class="fas" :color="props.language.trainTypes[props.selectTravelDetails.trainType].color" :text="'\uf238' | unescape"></Label>
                        </FlexboxLayout>
                        <FlexboxLayout class="element">
                            <Label class="title" :text="props.language.stopDetails.top.type"></Label>
                            <Label :text="props.language.trainTypes[props.selectTravelDetails.trainType].name"></Label>
                        </FlexboxLayout>
                        <FlexboxLayout class="element last">
                            <Label class="title" :text="props.language.stopDetails.top.number"></Label>
                            <Label :text="props.selectTravelDetails.Train"></Label>
                        </FlexboxLayout>
                    </FlexboxLayout>
                    <FlexboxLayout class="trainIcons">
                        <Label v-if="props.selectTravelDetails.BreastFeed === 'Y'" class="fas" :text="'\uf77c' | unescape"></Label>
                        <Label v-if="props.selectTravelDetails.Dinning === 'Y'" class="fas" :text="'\uf2e7' | unescape"></Label>
                        <Label v-if="props.selectTravelDetails.Cripple === 'Y'" class="fas" :text="'\uf193' | unescape"></Label>
                        <Label v-if="props.selectTravelDetails.Bike === 'Y'" class="fas" :text="'\uf206' | unescape"></Label>
                    </FlexboxLayout>
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout dock="center" class="dock-center">
                <ListView for="item in orderedTimeInfo" ref="myList" @loaded="onLoaded" separatorColor="transparent">
                    <v-template>
                        <FlexboxLayout class="oneRouteDetail">
                            <FlexboxLayout class="time">
                                <Label class="" :text="item.ArrTime"></Label>
                                <Label class="" :text="item.DepTime"></Label>
                            </FlexboxLayout>
                            <FlexboxLayout class="route" v-if="item.alreadyPassed">
                                <FlexboxLayout class="template-line">
                                    <Label class="line"></Label>
                                </FlexboxLayout>
                                <Label class="far" :text="'\uf111' | unescape"></Label>
                                <FlexboxLayout class="template-line">
                                    <Label class="line"></Label>
                                </FlexboxLayout>
                            </FlexboxLayout>
                            <FlexboxLayout class="route" v-else>
                                <FlexboxLayout class="template-line">
                                    <Label class="line passed"></Label>
                                </FlexboxLayout>
                                <Label class="far passed" :text="'\uf111' | unescape"></Label>
                                <FlexboxLayout class="template-line">
                                    <Label class="line passed"></Label>
                                </FlexboxLayout>
                            </FlexboxLayout>
                            <FlexboxLayout class="stationName">
                                <Label v-if="$store.state.language === 'EN'" class="" :text="item.eng站名"></Label>
                                <Label v-else class="" :text="item.站名"></Label>
                            </FlexboxLayout>
                        </FlexboxLayout>
                    </v-template>
                </ListView>
            </FlexboxLayout>
        </DockLayout>
    </Page>
</template>

<script>

    import handle from "../../assets/js/Vue/Route/Details/StopDetails/handle"

    export default {
        props: ['selectTravelDetails', 'language', 'startStation'],
        created: function () {
            handle.handle(this);
        },
        data() {
            return {
                orderedTimeInfo: [],
                startIndex: 0,
                props: {
                    selectTravelDetails: {
                        "Type": "0", "Train": "123", "BreastFeed": "Y", "Route": "", "Package": "N", "OverNightStn": "0", "LineDir": "1", "Line": "1", "Dinning": "Y", "Cripple": "Y", "CarClass": "1109", "Bike": "Y", "Note": "æ¯æ¥è¡é§ãæ¬åæ¬¡ç¬¬12è»çºè¦ªå­è»å»ï¼ä¸ç¼å®ç¡åº§ç¥¨ï¼éæè¦ªå­è»å»è»ç¥¨æå®¢ï¼è«å¿é²å¥æ­ä¹ã", "NoteEng": "Runs Daily.Accessible Car.", "TimeInfos": {
                            "1003": {"Station": "1003", "Order": "1", "DepTime": "14:25", "ArrTime": "14:23", "Routes": [1]},
                            "1005": {"Station": "1005", "Order": "2", "DepTime": "14:35", "ArrTime": "14:33", "Routes": [1]},
                            "1007": {"Station": "1007", "Order": "3", "DepTime": "14:46", "ArrTime": "14:45", "Routes": [1]},
                            "1008": {"Station": "1008", "Order": "4", "DepTime": "14:58", "ArrTime": "14:53", "Routes": [1]},
                            "1011": {"Station": "1011", "Order": "5", "DepTime": "15:08", "ArrTime": "15:06", "Routes": [1]},
                            "1015": {"Station": "1015", "Order": "6", "DepTime": "15:28", "ArrTime": "15:27", "Routes": [1]},
                            "1017": {"Station": "1017", "Order": "7", "DepTime": "15:39", "ArrTime": "15:37", "Routes": [1]},
                            "1025": {"Station": "1025", "Order": "8", "DepTime": "16:08", "ArrTime": "16:06", "Routes": [1, 4]},
                            "1028": {"Station": "1028", "Order": "9", "DepTime": "16:24", "ArrTime": "16:23", "Routes": [1, 2]},
                            "1120": {"Station": "1120", "Order": "13", "DepTime": "17:31", "ArrTime": "17:29", "Routes": [1, 6, 2]},
                            "1203": {"Station": "1203", "Order": "14", "DepTime": "17:43", "ArrTime": "17:42", "Routes": [1, 6]},
                            "1206": {"Station": "1206", "Order": "15", "DepTime": "17:52", "ArrTime": "17:51", "Routes": [1, 6]},
                            "1210": {"Station": "1210", "Order": "16", "DepTime": "18:08", "ArrTime": "18:07", "Routes": [1]},
                            "1215": {"Station": "1215", "Order": "17", "DepTime": "18:30", "ArrTime": "18:28", "Routes": [1, 7]},
                            "1220": {"Station": "1220", "Order": "18", "DepTime": "18:45", "ArrTime": "18:44", "Routes": [1, 7]},
                            "1227": {"Station": "1227", "Order": "19", "DepTime": "19:07", "ArrTime": "19:06", "Routes": [1, 7]},
                            "1228": {"Station": "1228", "Order": "20", "DepTime": "19:15", "ArrTime": "19:13", "Routes": [1, 7]},
                            "1238": {"Station": "1238", "Order": "22", "DepTime": "19:53", "ArrTime": "19:51", "Routes": [1]},
                            "1242": {"Station": "1242", "Order": "21", "DepTime": "19:42", "ArrTime": "19:39", "Routes": [1]},
                            "1305": {"Station": "1305", "Order": "10", "DepTime": "16:37", "ArrTime": "16:35", "Routes": [1, 2]},
                            "1317": {"Station": "1317", "Order": "11", "DepTime": "17:03", "ArrTime": "17:01", "Routes": [1, 2]},
                            "1319": {"Station": "1319", "Order": "12", "DepTime": "17:15", "ArrTime": "17:13", "Routes": [1, 2]},
                            "1402": {"Station": "1402", "Order": "23", "DepTime": "20:01", "ArrTime": "19:59", "Routes": [1]},
                            "1404": {"Station": "1404", "Order": "24", "DepTime": "20:10", "ArrTime": "20:08", "Routes": [1]},
                            "1406": {"Station": "1406", "Order": "25", "DepTime": "20:19", "ArrTime": "20:17", "Routes": [1]}
                        }, "StartStation": 1003, "StartTime": "14:25", "EndStation": 1406, "EndTime": "20:19", "Stations": {}, "Routes": [1, 4, 2, 6, 7], "mainRoute": 1, "MultiRoute": true, "trainType": "Tze-chiang", "timeDifference": 780000, "travelTime": "01:08"
                    },
                    language: {
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
                                title: 'Train Details',
                                type: 'Type',
                                number: 'Number'
                            }
                        }
                    },
                    startStation: 1008
                }
            }
        },
        methods: {
            onLoaded() {
                let _self = this;
                setTimeout(function () {
                    _self.$refs.myList.nativeView.scrollToIndex(_self.startIndex);
                }, 3000)
            },
        }
    }
</script>

<style scoped>

    .dock-top {
        height: 30%;
    }

    .dock-center {
        height: 70%;
    }

    .dock-top .top,
    .dock-center {
        margin-left: 5%;
    }

    .dock-top .top .top-title Label {
        font-size: 24;
    }

    .dock-top .top .top-title .fas {
        margin-right: 5%;
    }

    .dock-top {
        background-color: #1a0dab;
        color: #fff;
    }

    .dock-top .top {
        flex-direction: column;
    }

    .dock-top .top .top-title {
        flex-direction: row;
        align-items: center;
        height: 22%;
        width: 100%;
    }

    .dock-top .top .trainGeneral {
        flex-direction: row;
        justify-content: space-between;
        height: 40%;
    }

    .dock-top .top .trainGeneral .element {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .dock-top .top .trainGeneral .last {
        margin-right: 4%;
    }

    .dock-top .top .trainGeneral .element .title {
        padding-bottom: 4%;
    }

    .dock-top .top .trainIcons {
        flex-direction: row;
        justify-content: center;
        height: 38%;
    }

    .dock-top .top .trainIcons .fas {
        font-size: 34;
        margin-right: 10%;
    }


    /*** DOCK CENTER ***/

    .dock-center {

    }

    .dock-center {

    }

    .dock-center .oneRouteDetail {
        flex-direction: row;
        width: 100%;
    }

    .dock-center .oneRouteDetail .time {
        width: 15%;
        /*background-color: #4fab26;*/
    }

    .dock-center .oneRouteDetail .route {
        width: 10%;
        /*background-color: #ab312a;*/
    }

    .dock-center .oneRouteDetail .stationName {
        width: 75%;
        /*background-color: #ddaaee;*/
    }

    .dock-center .oneRouteDetail .time {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .dock-center .oneRouteDetail .route {
        flex-direction: column;
        align-items: center;
    }

    .dock-center .oneRouteDetail .route .far {
        font-size: 16;
        color: #1a0dab;
    }

    .dock-center .oneRouteDetail .route .far.passed {
        color: #FF9A00;
    }

    .dock-center .oneRouteDetail .route .template-line {
        flex-direction: row;
    }

    .dock-center .oneRouteDetail .route .template-line .line {
        border-left-color: #1a0dab;
        border-left-style: solid;
        border-left-width: 4px;
    }

    .dock-center .oneRouteDetail .route .template-line .line.passed {
        border-left-color: #FF9A00;
    }

    .dock-center .oneRouteDetail .stationName {
        flex-direction: column;
        justify-content: center;
    }


</style>