<template>
    <Page actionBarHidden="true">
        <DockLayout>
            <FlexboxLayout dock="top" class="dock-top">
                <FlexboxLayout class="top">
                    <FlexboxLayout class="top-title">
                        <FlexboxLayout class="titles" @tap="navigateBack()">
                            <Label class="fas" :text="'\uf060' | unescape"></Label>
                            <Label :text="props.language.details.top.title"></Label>
                        </FlexboxLayout>
                        <FlexboxLayout class="shareOptions">
                            <Label class="fas" :text="'\uf1e0' | unescape"></Label>
                            <Label class="far" :text="'\uf005' | unescape"></Label>
                        </FlexboxLayout>
                    </FlexboxLayout>
                    <FlexboxLayout class="routeDetails">
                        <FlexboxLayout class="timeDetails">
                            <Label :text="props.selectTravelDetails.TimeInfos[props.routeDetails.departure.details.時刻表編號].DepTime"></Label>
                            <Label class="fas" :text="'\uf061' | unescape"></Label>
                            <Label :text="props.selectTravelDetails.TimeInfos[props.routeDetails.arrival.details.時刻表編號].ArrTime"></Label>
                        </FlexboxLayout>
                        <FlexboxLayout class="dateDetails">
                            <Label :text="props.routeDetails.time.date.show"></Label>
                        </FlexboxLayout>
                        <FlexboxLayout class="otherDetails">
                            <Label class="far" :text="'\uf017' | unescape"></Label>
                            <Label :text="props.selectTravelDetails.travelTime"></Label>
                        </FlexboxLayout>
                    </FlexboxLayout>
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout dock="center" class="dock-center">
                <FlexboxLayout class="trainDetails">
                    <FlexboxLayout class="trainTimeDetails">
                        <Label :text="props.selectTravelDetails.TimeInfos[props.routeDetails.departure.details.時刻表編號].DepTime"></Label>
                        <Label class="fas" :color="props.language.trainTypes[props.selectTravelDetails.trainType].color" :text="'\uf238' | unescape"></Label>
                        <Label :text="props.selectTravelDetails.TimeInfos[props.routeDetails.arrival.details.時刻表編號].ArrTime"></Label>
                    </FlexboxLayout>
                    <FlexboxLayout class="route">
                        <Label class="far" :text="'\uf111' | unescape"></Label>
                        <FlexboxLayout class="template-line">
                            <Label class="line"></Label>
                        </FlexboxLayout>
                        <Label class="far" :text="'\uf111' | unescape"></Label>
                    </FlexboxLayout>
                    <FlexboxLayout class="trainDestArrDetails">
                        <Label v-if="$store.state.language === 'EN'" class="departure" :text="props.routeDetails.departure.details.eng站名"></Label>
                        <Label v-else class="departure" :text="props.routeDetails.departure.details.站名"></Label>
                        <FlexboxLayout class="trainDetailsIcons" @tap="navigateToRouteDetails">
                            <FlexboxLayout class="information">
                                <Label :text="props.language.trainTypes[props.selectTravelDetails.trainType].name + ' ' + props.selectTravelDetails.Train"></Label>
                                <FlexboxLayout class="trainIcons">
                                    <Label v-if="props.selectTravelDetails.BreastFeed === 'Y'" class="fas" :text="'\uf77c' | unescape"></Label>
                                    <Label v-if="props.selectTravelDetails.Dinning === 'Y'" class="fas" :text="'\uf2e7' | unescape"></Label>
                                    <Label v-if="props.selectTravelDetails.Cripple === 'Y'" class="fas" :text="'\uf193' | unescape"></Label>
                                    <Label v-if="props.selectTravelDetails.Bike === 'Y'" class="fas" :text="'\uf206' | unescape"></Label>
                                </FlexboxLayout>
                            </FlexboxLayout>
                            <FlexboxLayout class="navigation">
                                <Label class="fas" :text="'\uf054' | unescape"></Label>
                            </FlexboxLayout>
                        </FlexboxLayout>
                        <Label v-if="$store.state.language === 'EN'" class="arrival" :text="props.routeDetails.arrival.details.eng站名"></Label>
                        <Label v-else class="arrival" :text="props.routeDetails.arrival.details.站名"></Label>
                    </FlexboxLayout>
                </FlexboxLayout>
            </FlexboxLayout>
        </DockLayout>
    </Page>
</template>

<script>

    export default {
        props: ['routeDetails', 'selectTravelDetails', 'language'],
        data() {
            return {
                props: {
                    routeDetails: {
                        language: 'ZH',
                        departure: {
                            details: {
                                "時刻表編號": 1008,
                                "traWebsiteCode": "1000",
                                "站名": "臺北",
                                "eng站名": "Taipei",
                                "routeCode": [
                                    1
                                ]
                            },
                            hint: '選擇哪一站',
                            label: '從'
                        },
                        arrival: {
                            details: {
                                "時刻表編號": 1025,
                                "traWebsiteCode": "1210",
                                "站名": "新竹",
                                "eng站名": "Hsinchu",
                                "routeCode": [
                                    4,
                                    1
                                ]
                            },
                            hint: '選擇哪一站',
                            label: '去'
                        },
                        time: {
                            label: '時間',
                            hint: '',
                            date: {
                                show: '2019年7月12日',
                                real: "20190712"
                            },
                            time: '11:45',
                            local: 'zh-tw',
                            modal: {
                                top: {
                                    first: 'DEPARTURE',
                                    second: 'ARRIVAL',
                                },
                                center: {
                                    button: 'Now',
                                    date: {
                                        actual: null,
                                        today: null
                                    }
                                },
                                bottom: {
                                    leftBtn: 'DISCARD',
                                    rightBtn: 'CONFIRM',
                                }
                            }
                        },
                        button: 'SEARCH'
                    },
                    selectTravelDetails: {
                        "Type": "0", "Train": "123", "BreastFeed": "Y", "Route": "", "Package": "N", "OverNightStn": "0", "LineDir": "1", "Line": "1", "Dinning": "N", "Cripple": "Y", "CarClass": "1109", "Bike": "N", "Note": "æ¯æ¥è¡é§ãæ¬åæ¬¡ç¬¬12è»çºè¦ªå­è»å»ï¼ä¸ç¼å®ç¡åº§ç¥¨ï¼éæè¦ªå­è»å»è»ç¥¨æå®¢ï¼è«å¿é²å¥æ­ä¹ã", "NoteEng": "Runs Daily.Accessible Car.", "TimeInfos": {
                            "1003": {"Station": "1003", "Order": "1", "DepTime": "11:25", "ArrTime": "11:23", "Routes": [1]},
                            "1005": {"Station": "1005", "Order": "2", "DepTime": "11:35", "ArrTime": "11:33", "Routes": [1]},
                            "1007": {"Station": "1007", "Order": "3", "DepTime": "11:46", "ArrTime": "11:45", "Routes": [1]},
                            "1008": {"Station": "1008", "Order": "4", "DepTime": "11:58", "ArrTime": "11:53", "Routes": [1]},
                            "1011": {"Station": "1011", "Order": "5", "DepTime": "12:08", "ArrTime": "12:06", "Routes": [1]},
                            "1015": {"Station": "1015", "Order": "6", "DepTime": "12:28", "ArrTime": "12:27", "Routes": [1]},
                            "1017": {"Station": "1017", "Order": "7", "DepTime": "12:39", "ArrTime": "12:37", "Routes": [1]},
                            "1025": {"Station": "1025", "Order": "8", "DepTime": "13:08", "ArrTime": "13:06", "Routes": [1, 4]},
                            "1028": {"Station": "1028", "Order": "9", "DepTime": "13:24", "ArrTime": "13:23", "Routes": [1, 2]},
                            "1120": {"Station": "1120", "Order": "13", "DepTime": "14:31", "ArrTime": "14:29", "Routes": [1, 6, 2]},
                            "1203": {"Station": "1203", "Order": "14", "DepTime": "14:43", "ArrTime": "14:42", "Routes": [1, 6]},
                            "1206": {"Station": "1206", "Order": "15", "DepTime": "14:52", "ArrTime": "14:51", "Routes": [1, 6]},
                            "1210": {"Station": "1210", "Order": "16", "DepTime": "15:08", "ArrTime": "15:07", "Routes": [1]},
                            "1215": {"Station": "1215", "Order": "17", "DepTime": "15:30", "ArrTime": "15:28", "Routes": [1, 7]},
                            "1220": {"Station": "1220", "Order": "18", "DepTime": "15:45", "ArrTime": "15:44", "Routes": [1, 7]},
                            "1227": {"Station": "1227", "Order": "19", "DepTime": "16:07", "ArrTime": "16:06", "Routes": [1, 7]},
                            "1228": {"Station": "1228", "Order": "20", "DepTime": "16:15", "ArrTime": "16:13", "Routes": [1, 7]},
                            "1238": {"Station": "1238", "Order": "22", "DepTime": "16:53", "ArrTime": "16:51", "Routes": [1]},
                            "1242": {"Station": "1242", "Order": "21", "DepTime": "16:42", "ArrTime": "16:39", "Routes": [1]},
                            "1305": {"Station": "1305", "Order": "10", "DepTime": "13:37", "ArrTime": "13:35", "Routes": [1, 2]},
                            "1317": {"Station": "1317", "Order": "11", "DepTime": "14:03", "ArrTime": "14:01", "Routes": [1, 2]},
                            "1319": {"Station": "1319", "Order": "12", "DepTime": "14:15", "ArrTime": "14:13", "Routes": [1, 2]},
                            "1402": {"Station": "1402", "Order": "23", "DepTime": "17:01", "ArrTime": "16:59", "Routes": [1]},
                            "1404": {"Station": "1404", "Order": "24", "DepTime": "17:10", "ArrTime": "17:08", "Routes": [1]},
                            "1406": {"Station": "1406", "Order": "25", "DepTime": "17:19", "ArrTime": "17:17", "Routes": [1]}
                        }, "StartStation": 1003, "StartTime": "11:25", "EndStation": 1406, "EndTime": "17:19", "Stations": {}, "Routes": [1, 4, 2, 6, 7], "mainRoute": 1, "MultiRoute": true, "trainType": "Tze-chiang", "timeDifference": 780000, "travelTime": "01:08"
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
                                title: 'Train Details'
                            }
                        }
                    }
                }
            }
        },
        methods: {
            navigateToRouteDetails: function () {
                this.$goto("RouteStopDetails", {
                    props: {
                        travelDetails: this.props.selectTravelDetails,
                        language: this.props.language
                    }
                })
            }
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
    .dock-center .trainDetails {
        margin-left: 5%;
    }

    .dock-top,
    .dock-top .top,
    .dock-top .top .routeDetails {
        flex-direction: column;
    }

    .dock-top .top .top-title .fas,
    .dock-top .top .top-title .far,
    .dock-top .top .routeDetails .fas,
    .dock-top .top .routeDetails .far {
        font-size: 24;
    }

    .dock-top .top .top-title .titles Label,
    .dock-top .top .routeDetails .timeDetails Label,
    .dock-top .top .routeDetails .otherDetails Label {
        font-size: 24;
    }

    .dock-top .top .routeDetails .dateDetails Label {
        font-size: 18;
    }

    .dock-top {
        background-color: #1a0dab;
        color: #fff;
    }

    .dock-top .top .top-title {
        height: 22%;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .dock-top .top .top-title .titles {
        flex-direction: row;
        align-items: center;
    }

    .dock-top .top .top-title .titles .fas {
        margin-right: 5%;
    }

    .dock-top .top .top-title .shareOptions {
        margin-right: 3%;
    }

    .dock-top .top .top-title .shareOptions .fas {
        margin-right: 4%;
    }

    .dock-top .top .top-title .shareOptions .fas {
        padding-right: 10%;
    }

    .dock-top .top .routeDetails {
        height: 78%;
    }

    .dock-top .top .routeDetails .timeDetails {
        flex-direction: row;
        align-items: center;
        height: 35%;
    }

    .dock-top .top .routeDetails .timeDetails .fas {
        margin-left: 10%;
        margin-right: 10%;
    }

    .dock-top .top .routeDetails .dateDetails {
        flex-direction: row;
        align-items: center;
        height: 30%;
    }

    .dock-top .top .routeDetails .otherDetails {
        flex-direction: row;
        align-items: center;
        height: 35%;
    }

    .dock-top .top .routeDetails .otherDetails .far {
        margin-right: 5%;
    }

    /*** DOCK CENTER ***/

    .dock-center .trainDetails .trainDestArrDetails Label,
    .dock-center .trainDetails .trainTimeDetails Label {
        color: #1a0dab;
    }

    .dock-center {
        flex-direction: column;
    }

    .dock-center .trainDetails {
        flex-direction: row;
        margin-top: 4%;
        height: 30%;
    }

    .dock-center .trainDetails .trainTimeDetails {
        width: 15%;
    }

    .dock-center .trainDetails .route {
        width: 10%;
    }

    .dock-center .trainDetails .trainDestArrDetails {
        width: 75%;
    }

    .dock-center .trainDetails .trainTimeDetails {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .dock-center .trainDetails .route {
        flex-direction: column;
    }

    .dock-center .trainDetails .trainDestArrDetails {
        flex-direction: column;
    }

    .dock-center .trainDetails .route {
        flex-direction: column;
        align-items: center;
    }

    .dock-center .trainDetails .route .far {
        font-size: 16;
        color: #1a0dab;
    }

    .dock-center .trainDetails .route .template-line {
        flex-direction: row;
        height: 77%;
    }

    .dock-center .trainDetails .route .template-line .line {
        border-left-color: #1a0dab;
        border-left-style: solid;
        border-left-width: 4px;
    }

    .dock-center .trainDetails .trainDestArrDetails {
        flex-direction: column;
        justify-content: space-between;
        margin-right: 4%;
    }

    .dock-center .trainDetails .trainDestArrDetails .departure {
        padding-bottom: 8%;
        border-bottom-color: #D3D3D3;
        border-bottom-style: solid;
        border-bottom-width: 3px;
    }

    .dock-center .trainDetails .trainDestArrDetails .arrival {
        padding-top: 8%;
        border-top-color: #D3D3D3;
        border-top-style: solid;
        border-top-width: 3px;
    }

    .dock-center .trainDetails .trainDestArrDetails .trainDetailsIcons {
        flex-direction: row;
        width: 100%;
    }

    .dock-center .trainDetails .trainDestArrDetails .trainDetailsIcons .information {
        flex-direction: column;
        width: 85%;
    }

    .dock-center .trainDetails .trainDestArrDetails .trainDetailsIcons .information .trainIcons {
        padding-top: 8%;
        flex-direction: row;
    }

    .dock-center .trainDetails .trainDestArrDetails .trainDetailsIcons .information .trainIcons .fas {
        font-size: 24;
        margin-right: 8%;
    }

    .dock-center .trainDetails .trainDestArrDetails .trainDetailsIcons .navigation {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 15%;
        /*background-color: #1a0dab;*/
    }

</style>