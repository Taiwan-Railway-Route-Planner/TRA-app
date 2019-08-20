<template>
    <Page actionBarHidden="true">
        <DockLayout>
            <FlexboxLayout dock="top" class="dock-top">
                <FlexboxLayout class="top">
                    <FlexboxLayout class="top-title">
                        <Label :text="data.top.first + ':'"></Label>
                        <Label :text="data.top.second + ':'"></Label>
                    </FlexboxLayout>
                    <FlexboxLayout v-if="$store.state.language === 'ZH'" class="top-data">
                        <Label :text="$props.routeDetails.departure.details.站名"></Label>
                        <Label :text="$props.routeDetails.arrival.details.站名"></Label>
                    </FlexboxLayout>
                    <FlexboxLayout v-else class="top-data">
                        <Label :text="$props.routeDetails.departure.details.eng站名"></Label>
                        <Label :text="$props.routeDetails.arrival.details.eng站名"></Label>
                    </FlexboxLayout>
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout dock="bottom" class="bottom-menu">
                <FlexboxLayout class="menu-choose" @tap="navToStart">
                    <Label class="fas" :text="'\uf3c5' | unescape"></Label>
                </FlexboxLayout>
                <FlexboxLayout class="menu-choose" @tap="navToStar">
                    <Label class="fas" :text="'\uf005' | unescape"></Label>
                </FlexboxLayout>
                <FlexboxLayout class="menu-choose" @tap="navToSet">
                    <Label class="fas" :text="'\uf509' | unescape"></Label>
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout dock="center" class="center">
                <ListView v-if="$props.timeTable.multi" for="item in $props.timeTable.data" @itemTap="onItemTap" ref="myList" @loaded="onLoaded">
                    <v-template>
                        <FlexboxLayout class="travelDetails">
                            <FlexboxLayout class="timeDetails">
                                <Label class="timeStamps" :text="item.startTime"></Label>
                                <Label class="fas" :text="'\uf061'| unescape"></Label>
                                <Label class="timeStamps" :text="item.endTime"></Label>
                            </FlexboxLayout>
                            <FlexboxLayout class="travelTime">
                                <FlexboxLayout>
                                    <Label class="far" :text="'\uf017' | unescape"></Label>
                                    <Label :text="item.travelTime"></Label>
                                </FlexboxLayout>
                            </FlexboxLayout>
                            <FlexboxLayout v-if="item.trainTypes.length === 2" class="typeOfTrain">
                                <Label class="fas" :color="data.trainTypes[item.trainTypes[0]].color" :text="'\uf238' | unescape"></Label>
                                <Label class="fas" :color="data.trainTypes[item.trainTypes[1]].color" :text="'\uf238' | unescape"></Label>
                                <FlexboxLayout class="transfers">
                                    <Label class="fas" :text="'\uf074' | unescape"></Label>
                                    <Label :text="item.trainTypes.length"></Label>
                                </FlexboxLayout>
                            </FlexboxLayout>
                            <FlexboxLayout v-if="item.trainTypes.length === 3" class="typeOfTrain">
                                <Label class="fas" :color="data.trainTypes[item.trainTypes[0]].color" :text="'\uf238' | unescape"></Label>
                                <Label class="fas" :color="data.trainTypes[item.trainTypes[1]].color" :text="'\uf238' | unescape"></Label>
                                <Label class="fas" :color="data.trainTypes[item.trainTypes[2]].color" :text="'\uf238' | unescape"></Label>
                                <FlexboxLayout class="transfers">
                                    <Label class="fas" :text="'\uf074' | unescape"></Label>
                                    <Label :text="item.trainTypes.length"></Label>
                                </FlexboxLayout>
                            </FlexboxLayout>
                            <FlexboxLayout v-if="item.trainTypes.length === 4" class="typeOfTrain">
                                <Label class="fas" :color="data.trainTypes[item.trainTypes[0]].color" :text="'\uf238' | unescape"></Label>
                                <Label class="fas" :color="data.trainTypes[item.trainTypes[1]].color" :text="'\uf238' | unescape"></Label>
                                <Label class="fas" :color="data.trainTypes[item.trainTypes[2]].color" :text="'\uf238' | unescape"></Label>
                                <Label class="fas" :color="data.trainTypes[item.trainTypes[3]].color" :text="'\uf238' | unescape"></Label>
                                <FlexboxLayout class="transfers">
                                    <Label class="fas" :text="'\uf074' | unescape"></Label>
                                    <Label :text="item.trainTypes.length"></Label>
                                </FlexboxLayout>
                            </FlexboxLayout>
                        </FlexboxLayout>
                    </v-template>
                </ListView>
                <ListView v-else for="item in $props.timeTable.data" @itemTap="onItemTap" ref="myList" @loaded="onLoaded">
                    <v-template>
                        <FlexboxLayout class="travelDetails">
                            <FlexboxLayout class="timeDetails">
                                <Label class="timeStamps" :text="item.TimeInfos[$props.routeDetails.departure.details.時刻表編號].DepTime"></Label>
                                <Label class="fas" :text="'\uf061'| unescape"></Label>
                                <Label class="timeStamps" :text="item.TimeInfos[$props.routeDetails.arrival.details.時刻表編號].ArrTime"></Label>
                            </FlexboxLayout>
                            <FlexboxLayout class="travelTime">
                                <Label class="far" :text="'\uf017' | unescape"></Label>
                                <Label :text="item.travelTime"></Label>
                            </FlexboxLayout>
                            <FlexboxLayout class="typeOfTrain">
                                <Label class="fas" :color="data.trainTypes[item.trainType].color" :text="'\uf238' | unescape"></Label>
                                <Label :text="data.trainTypes[item.trainType].name + ' ' + item.Train"></Label>
                            </FlexboxLayout>
                        </FlexboxLayout>
                    </v-template>
                </ListView>
            </FlexboxLayout>
        </DockLayout>
    </Page>
</template>

<script>

    import handle from "../../assets/js/Vue/Route/handle"

    export default {
        props: ['routeDetails', 'indexWithClosestToRealTime', 'timeTable'],
        created: async function () {
            await handle.handleIncomingRouteDetails(this);
        },
        data() {
            return {
                data: null
            }
        },
        methods: {
            onLoaded() {
                this.$refs.myList.nativeView.scrollToIndex(this.$props.indexWithClosestToRealTime);
            },
            navToStart: function () {
                this.$goto('Select');
            },
            navToStar: function () {

            },
            navToSet: function () {
                this.$goto("Settings");
            },
            onItemTap: function (event) {
                console.log(this.$props.timeTable);
                console.log(this.$props.timeTable.multi);
                this.$goto('RouteDetails', {
                        props: {
                            routeDetails: this.$props.routeDetails,
                            selectTravelDetails: event.item,
                            language: this.data,
                            multi: this.$props.timeTable.multi
                        }
                    }
                );
            }
        }
    }

</script>

<style scoped>

    .dock-top {
        background-color: #1a0dab;
        color: #fff;
        height: 10%;
    }

    .dock-top Label {
        font-size: 17;
    }

    .top {
        flex-direction: row;
        margin-left: 6%;
        align-items: center;
    }

    .top .top-title {
        flex-direction: column;
        margin-bottom: 1%;
        margin-right: 10%;
    }

    .top .top-data {
        flex-direction: column;
    }

    .center {
        background-color: #fff;
        color: #1a0dab;
    }

    .center .travelDetails {
        padding-top: 15%;
        padding-left: 15%;
        flex-direction: column;
    }

    .center .travelDetails .timeDetails {
        padding-bottom: 15%;
    }

    .center .travelDetails .timeDetails .timeStamps {
        font-size: 20;
    }

    .center .travelDetails .timeDetails .fas {
        margin-left: 10%;
        margin-right: 10%;
    }

    .center .travelDetails .travelTime {
        padding-bottom: 15%;
    }

    .center .travelDetails .travelTime .far,
    .center .travelDetails .typeOfTrain .fas {
        margin-right: 5%;
        font-size: 24;
    }

    .center .travelDetails .travelTime Label {
        font-size: 18;
    }

    .center .travelDetails .typeOfTrain .transfers {
        margin-left: 5%;
    }

    .center .travelDetails .typeOfTrain {
        padding-bottom: 20%;
    }

    .center .travelDetails .typeOfTrain .fas {
        margin-right: 5%;
        font-size: 24;
    }

    .center .travelDetails .typeOfTrain Label {
        font-size: 18;
    }

</style>