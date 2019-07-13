<template>
    <Page actionBarHidden="true">
        <DockLayout>
            <FlexboxLayout dock="top" class="dock-top">
                <FlexboxLayout class="top">
                    <FlexboxLayout class="top-title">
                        <Label :text="data.top.first + ':'"></Label>
                        <Label :text="data.top.second + ':'"></Label>
                    </FlexboxLayout>
                    <FlexboxLayout v-if="$store.state.language === 'EN'" class="top-data">
                        <Label :text="$props.routeDetails.departure.details.eng站名"></Label>
                        <Label :text="$props.routeDetails.arrival.details.eng站名"></Label>
                    </FlexboxLayout>
                    <FlexboxLayout v-else class="top-data">
                        <Label :text="$props.routeDetails.departure.details.站名"></Label>
                        <Label :text="$props.routeDetails.arrival.details.站名"></Label>
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
                <ListView for="item in timeTable" @itemTap="onItemTap" ref="myList" @loaded="onLoaded">
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
        props: ['routeDetails'],
        created: async function () {
            await handle.handleIncomingRouteDetails(this);
            console.log(JSON.stringify(this.timeTable));
        },
        data() {
            return {
                timeTable: [],
                indexWithClosestToRealTime: 0,
                longDate: "20190704",
                data: null
            }
        },
        methods: {
            onLoaded() {
                let _self = this;
                setTimeout(function () {
                    _self.$refs.myList.nativeView.scrollToIndex(_self.indexWithClosestToRealTime);
                }, 3000)
            },
            navToStart: function () {
                this.$goto('Select');
            },
            navToStar: function () {

            },
            navToSet: function () {

            },
            onItemTap: function (event) {
                this.$goto('RouteDetails', {
                        props: {
                            routeDetails: this.$props.routeDetails,
                            selectTravelDetails: event.item,
                            language: this.data
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

    .center .travelDetails .travelTime .far {
        margin-right: 5%;
        font-size: 24;
    }

    .center .travelDetails .travelTime Label {
        font-size: 18;
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