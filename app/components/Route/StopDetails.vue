<template>
    <Page actionBarHidden="true">
        <DockLayout>
            <FlexboxLayout dock="top" class="dock-top">
                <FlexboxLayout class="top">
                    <FlexboxLayout class="top-title">
                        <FlexboxLayout class="titles" @tap="navigateBack()">
                            <Label class="fas" :text="'\uf060' | unescape"></Label>
                            <Label :text="props.language.stopDetails.top.title"></Label>
                        </FlexboxLayout>
                        <FlexboxLayout class="shareOptions">
                            <Label class="fas" :text="'\uf1e0' | unescape"></Label>
                            <Label class="far" :text="'\uf005' | unescape"></Label>
                        </FlexboxLayout>
                    </FlexboxLayout>
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout dock="center" class="dock-center">

            </FlexboxLayout>
        </DockLayout>
    </Page>
</template>

<script>
    export default {
        props: ['travelDetails', 'language'],
        data() {
            return {
                props: {
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
        }
    }
</script>

<style scoped>

</style>