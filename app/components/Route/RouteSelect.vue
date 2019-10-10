<template>
    <Page actionBarHidden="true">
        <DockLayout>
            <FlexboxLayout dock="top" class="dock-top">
                <FlexboxLayout :class="resizeLabels">
                    <FlexboxLayout class="navDetails" @tap="navigateBackVue">
                        <Label class="fas" :text="'\uf060' | unescape"></Label>
                        <FlexboxLayout :class="[smallerTitleRoom, 'top-title']">
                            <Label  :text="data.top.first + ':'"></Label>
                            <Label  :text="data.top.second + ':'"></Label>
                        </FlexboxLayout>
                        <FlexboxLayout v-if="$store.state.language === 'ZH'" class="biggerTopDataForZH top-data">
                            <Label :text="$props.routeDetails.departure.details.站名"></Label>
                            <Label :text="$props.routeDetails.arrival.details.站名"></Label>
                        </FlexboxLayout>
                        <FlexboxLayout v-else :class="[biggerDestinationDetails, 'top-data']">
                            <Label :class="makeDestinationSmaller" :text="$props.routeDetails.departure.details.eng站名"></Label>
                            <Label :class="makeDestinationSmaller" :text="$props.routeDetails.arrival.details.eng站名"></Label>
                        </FlexboxLayout>
                    </FlexboxLayout>
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout dock="bottom" class="bottom-menu">
                <FlexboxLayout class="menu-choose" @tap="navToStart">
                    <Label class="fas" :text="'\uf3c5' | unescape"></Label>
                </FlexboxLayout>
                <FlexboxLayout class="menu-choose" @tap="navToStar">
                    <!--<Label class="fas" :text="'\uf005' | unescape"></Label>-->
                </FlexboxLayout>
                <FlexboxLayout class="menu-choose" @tap="navToSet">
                    <Label class="fas" :text="'\uf509' | unescape"></Label>
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout dock="center" class="center">
                <ListView v-if="$props.timeTable.multi" for="(item, index) in $props.timeTable.data" @itemTap="onItemTap" ref="myList" @loaded="onLoaded">
                    <v-template>
                        <FlexboxLayout class="travelDetails">
                            <FlexboxLayout class="travelDetailsNoFare">
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
                            <FlexboxLayout class="fareDetails">
                                <FlexboxLayout class="prices">
                                    <Label class="fas" :text="'\uf3ff' | unescape"></Label>
                                    <Label class="text" :text="item.prices.singlePrice"></Label>
                                </FlexboxLayout>
                                <FlexboxLayout v-if="item.prices.ePrice !== null" class="prices">
                                    <Image src="~/assets/images/easycard.png" stretch="none"></Image>
                                    <Label class="text" :text="item.prices.ePrice"></Label>
                                </FlexboxLayout>
                            </FlexboxLayout>
                        </FlexboxLayout>
                    </v-template>
                </ListView>
                <ListView v-else for="item in $props.timeTable.data" @itemTap="onItemTap" ref="myList" @loaded="onLoaded">
                    <v-template>
                        <FlexboxLayout class="travelDetails">
                            <FlexboxLayout class="travelDetailsNoFare">
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
                            <FlexboxLayout class="fareDetails">
                                <FlexboxLayout class="prices">
                                    <Label class="fas" :text="'\uf3ff' | unescape"></Label>
                                    <Label class="text" :text="item.singlePrice"></Label>
                                </FlexboxLayout>
                                <FlexboxLayout v-if="item.ePrice !== null" class="prices">
                                    <Image src="~/assets/images/easycard.png" stretch="none"></Image>
                                    <Label class="text" :text="item.ePrice"></Label>
                                </FlexboxLayout>
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
        computed: {
            resizeLabels() {
                switch (this.$store.state.language) {
                    case 'ES':
                    case 'DE':
                    case 'FR':
                    case 'EN':
                        return 'smallerLabelsForSpain';
                    // case 'EN':
                    //     return 'smallerLabels';
                    default:
                        return 'standardLabels';
                }
            },
            makeDestinationSmaller(){
                if (this.$props.routeDetails.departure.details.eng站名.length > 19
                    || this.$props.routeDetails.arrival.details.eng站名.length > 19){
                    return 'extraSmall';
                } else {
                    return ''
                }
            },
            smallerTitleRoom(){
                switch (this.$store.state.language) {
                    case 'KO':
                        return 'smallerTopTitleForKorean';
                    case 'ZH':
                        return 'smallerTopTitleForZH';
                    case 'NL':
                        return 'smallerTopTitleForDutch';
                    case 'ES':
                    case 'DE':
                        return 'biggerTopTitleForSpanish';
                    case 'FR':
                        return 'biggerTopTitleForFrench';
                    case 'EN':
                        return 'biggerTopTitleForEnglish';
                    default:
                        return '';
                }
            },
            biggerDestinationDetails(){
                switch (this.$store.state.language) {
                    case 'KO':
                        return 'biggerTopDataForKorean';
                    case 'ZH':
                        return 'biggerTopDataForZH';
                    case 'NL':
                        return 'biggerTopDataForDutch';
                    case 'ES':
                    case 'DE':
                        return 'biggerTopDataForSpanish';
                    case 'FR':
                        return 'biggerTopDataForFrench';
                    case 'EN':
                        return 'biggerTopTitleForEnglish';
                    default:
                        return '';
                }
            }
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
            navigateBackVue: function () {
                this.$navigateBack();
            },
            onItemTap: function (event) {
                if (this.$props.timeTable.multi) {
                    this.$goto('MultiRouteDetails', {
                            props: {
                                routeDetails: this.$props.routeDetails,
                                selectTravelDetails: event.item,
                                language: this.data
                            }
                        }
                    );
                } else {
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
    }

</script>

<style scoped>

    .dock-top {
        background-color: #1a0dab;
        color: #fff;
        height: 10%;
    }

    /*.dock-top Label {*/
    /*    font-size: 17;*/
    /*}*/

    /*.top {*/
    /*    flex-direction: row;*/
    /*    margin-left: 6%;*/
    /*    align-items: center;*/
    /*}*/

    .dock-top .navDetails {
        flex-direction: row;
        margin-left: 4%;
        align-items: center;
    }

    .dock-top .navDetails .top-title {
        flex-direction: column;
        margin-bottom: 1%;
        margin-right: 3%;
        width: 30%;
    }

    .dock-top .navDetails .fas {
        font-size: 30;
        margin-right: 4%;
        width: 10%;
    }

    .dock-top .navDetails .top-data {
        flex-direction: column;
        width: 50%;
    }

    .center {
        background-color: #fff;
        color: #1a0dab;
    }

    .center .travelDetails {
        padding-top: 15%;
        padding-left: 15%;
    }

    .center .travelDetails .travelDetailsNoFare {
        flex-direction: column;
        width: 80%;
    }

    .center .travelDetails .fareDetails {
        width: 20%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .center .travelDetails .fareDetails .prices {
        flex-direction: row;
        justify-content: space-between;
    }

    .center .travelDetails .fareDetails .prices .fas {
        font-size: 20;
    }

    .center .travelDetails .fareDetails .prices .text {
        padding-left: 4%;
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

    /****** GENERATE FROM COMPUTED resizeLabels() ******/

    .smallerLabelsForSpain .navDetails .top-title Label {
        font-size: 14;
    }

    .smallerLabelsForSpain .navDetails .top-data Label{
        font-size: 14;
    }

    .smallerLabelsForSpain .navDetails .fas{
        margin-right: 2%;
    }

    .standardLabels .navDetails Label{
        font-size: 16;
    }

    /****** GENERATE FROM COMPUTED makeDestinationSmaller() ******/

    .dock-top .navDetails .top-data .extraSmall{
        font-size: 10;
        padding-bottom: 3%;
        padding-top: 3%;
    }


    /****** GENERATE FROM COMPUTED biggerDestinationDetails() ******/

    .dock-top .navDetails .top-data.biggerTopDataForKorean{
        width: 64%;
    }

    .dock-top .navDetails .top-data.biggerTopDataForZH{
        width: 62%;
    }

    .dock-top .navDetails .top-data.biggerTopDataForDutch{
        width: 67%;
    }

    .dock-top .navDetails .top-data.biggerTopDataForSpanish{
        width: 40%;
    }

    .dock-top .navDetails .top-data.biggerTopDataForFrench{
        width: 50%;
    }

    .dock-top .navDetails .top-data.biggerTopTitleForEnglish{
        width: 45%;
    }

    /****** GENERATE FROM COMPUTED smallerTitleRoom() ******/

    .dock-top .navDetails .top-title.smallerTopTitleForKorean{
        width: 16%;
    }

    .dock-top .navDetails .top-title.smallerTopTitleForZH{
        width: 18%;
    }

    .dock-top .navDetails .top-title.smallerTopTitleForDutch{
        width: 13%;
    }

    .dock-top .navDetails .top-title.biggerTopTitleForSpanish{
        width: 42%;
    }

    .dock-top .navDetails .top-title.biggerTopTitleForFrench{
        width: 32%;
    }

    .dock-top .navDetails .top-title.biggerTopTitleForEnglish{
        width: 37%;
    }

</style>