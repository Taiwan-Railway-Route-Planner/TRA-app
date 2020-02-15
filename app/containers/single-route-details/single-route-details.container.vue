<template>
    <Page actionBarHidden="true">
        <DockLayout id="train">
            <FlexboxLayout dock="top" class="dock-top">
                <FlexboxLayout class="top">
                    <FlexboxLayout class="top-title">
                        <FlexboxLayout class="titles" @tap="navigateBackVue">
                            <Label class="fas" :text="'\uf060' | unescape"/>
                            <Label :class="smallerTopTitle" :text="$props.language.details.top.title"/>
                        </FlexboxLayout>
                        <FlexboxLayout class="shareOptions">
                            <Label class="fas" @tap="shareToTheWorld" :text="'\uf1e0' | unescape"/>
                            <!--<Label class="far" :text="'\uf005' | unescape"></Label>-->
                        </FlexboxLayout>
                    </FlexboxLayout>
                    <FlexboxLayout class="routeDetails">
                        <FlexboxLayout class="timeDetails">
                            <Label :text="$props.selectTravelDetails.TimeInfos[$props.routeDetails.departure.details.時刻表編號].DepTime"/>
                            <Label class="fas" :text="'\uf061' | unescape"/>
                            <Label :text="$props.selectTravelDetails.TimeInfos[$props.routeDetails.arrival.details.時刻表編號].ArrTime"/>
                        </FlexboxLayout>
                        <FlexboxLayout class="dateDetails">
                            <FlexboxLayout class="dateDetails">
                                <Label :text="$props.routeDetails.time.date.show"/>
                            </FlexboxLayout>
                            <FlexboxLayout class="otherDetails">
                                <Label class="far" :text="'\uf017' | unescape"/>
                                <Label :text="$props.selectTravelDetails.travelTime"/>
                            </FlexboxLayout>
                        </FlexboxLayout>
                    </FlexboxLayout>
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout dock="center" class="dock-center">
                <FlexboxLayout class="extraDetails">
                    <FlexboxLayout class="prices">
                        <Label class="fas" :text="'\uf3ff' | unescape"/>
                        <Label class="text" :text="'NT$ ' + $props.selectTravelDetails.singlePrice"/>
                        <Label :class="[smallerTextPrices, 'text']" :text="$props.language.details.price.single"/>
                    </FlexboxLayout>
                    <FlexboxLayout v-if="$props.selectTravelDetails.ePrice !== null" class="prices">
                        <Image src="~/assets/images/easycard.png" stretch="none"/>
                        <Label class="text" :text="'NT$ ' +$props.selectTravelDetails.ePrice"/>
                        <Label :class="[smallerTextPrices, 'text']" :text="$props.language.details.price.ePrice"/>
                    </FlexboxLayout>
                    <FlexboxLayout class="prices">
                        <Label class="fas" :text="'\uf4d7' | unescape"/>
                        <Label class="text" :text="$props.selectTravelDetails.distance + ' km'"/>
                    </FlexboxLayout>
                </FlexboxLayout>
                <FlexboxLayout class="trainDetails" @tap="navigateToRouteDetails">
                    <FlexboxLayout class="trainTimeDetails train-colors">
                        <Label :text="$props.selectTravelDetails.TimeInfos[$props.routeDetails.departure.details.時刻表編號].DepTime"/>
                        <Label :class="['fas', $props.language.trainTypes[$props.selectTravelDetails.trainType].color]" :text="'\uf238' | unescape"/>
                        <Label :text="$props.selectTravelDetails.TimeInfos[$props.routeDetails.arrival.details.時刻表編號].ArrTime"/>
                    </FlexboxLayout>
                    <FlexboxLayout class="route">
                        <Label class="far" :text="'\uf111' | unescape"/>
                        <FlexboxLayout class="template-line">
                            <Label class="line"/>
                        </FlexboxLayout>
                        <Label class="far" :text="'\uf111' | unescape"/>
                    </FlexboxLayout>
                    <FlexboxLayout class="trainDestArrDetails">
                        <Label v-if="$store.state.language === 'ZH'" class="departure" :text="$props.routeDetails.departure.details.站名"/>
                        <ScalingLabel v-else class="departure" :text="$props.routeDetails.departure.details.eng站名"/>
                        <FlexboxLayout class="trainDetailsIcons">
                            <FlexboxLayout class="information">
                                <Label :text="$props.language.trainTypes[$props.selectTravelDetails.trainType].name + ' ' + $props.selectTravelDetails.Train"/>
                                <FlexboxLayout class="trainIcons">
                                    <Label v-if="$props.selectTravelDetails.BreastFeed === 'Y'" class="fas" :text="'\uf77c' | unescape"/>
                                    <Label v-if="$props.selectTravelDetails.Dinning === 'Y'" class="fas" :text="'\uf2e7' | unescape"/>
                                    <Label v-if="$props.selectTravelDetails.Cripple === 'Y'" class="fas" :text="'\uf193' | unescape"/>
                                    <Label v-if="$props.selectTravelDetails.Bike === 'Y'" class="fas" :text="'\uf206' | unescape"/>
                                </FlexboxLayout>
                            </FlexboxLayout>
                            <FlexboxLayout class="navigation">
                                <Label class="fas" :text="'\uf054' | unescape"/>
                            </FlexboxLayout>
                        </FlexboxLayout>
                        <Label v-if="$store.state.language === 'ZH'" class="arrival" :text="$props.routeDetails.arrival.details.站名"/>
                        <ScalingLabel v-else class="arrival" :text="$props.routeDetails.arrival.details.eng站名"/>
                    </FlexboxLayout>
                </FlexboxLayout>
            </FlexboxLayout>
        </DockLayout>
    </Page>
</template>

<script>

    import handle from "../../assets/js/Vue/Route/TransfersOrNot/handle"

    export default {
        props: ['routeDetails', 'selectTravelDetails', 'language'],
        computed: {
            smallerTextPrices(){
                switch (this.$store.state.language) {
                    case 'RU':
                    case 'AR':
                        return 'smallerTextPrices';
                    default:
                        return '';
                }
            },
            smallerTopTitle(){
                switch (this.$store.state.language) {
                    case 'AR':
                        return 'smallerTopTitle';
                    default:
                        return '';
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            navigateToRouteDetails: function () {
                this.$goto("RouteStopDetails", {
                    props: {
                        selectTravelDetails: this.$props.selectTravelDetails,
                        language: this.$props.language
                    }
                })
            },
            shareToTheWorld: function () {
                handle.share(this, false);
            },
            navigateBackVue: function () {
                this.$navigateBack();
            }
        }
    }

</script>

<style lang="scss" scoped>
    @import "../../theme/variables";
    @import "../../theme/generalStyles";


    .dock-top {
        height: 18%;
    }

    .dock-top .top,
    .dock-center .trainDetails {
        margin-left: 5%;
    }

    .dock-top .top {
        margin-top: 4%;
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
    .dock-top .top .routeDetails .dateDetails .otherDetails Label {
        font-size: 24;
    }

    .dock-top .top .routeDetails .dateDetails .dateDetails Label {
        font-size: 18;
    }

    .dock-top .top .routeDetails .dateDetails .otherDetails {
        padding-right: 15%;
    }

    .dock-top .top .routeDetails .dateDetails {
        flex-direction: row;
        justify-content: space-between;
    }

    .dock-top {
        background-color: $primary;
        color: $white;

        .ns-dark &{
            background-color: $dark-primary;
            color: $dark-white;
        }
    }

    .dock-top .top .top-title {
        height: 26%;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .dock-top .top .top-title .titles {
        flex-direction: row;
        align-items: center;
        text-align: center;
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
        height: 50%;
    }

    .dock-top .top .routeDetails .timeDetails .fas {
        margin-left: 10%;
        margin-right: 10%;
    }

    .dock-top .top .routeDetails .dateDetails {
        flex-direction: row;
        align-items: center;
        height: 50%;
    }

    .dock-top .top .routeDetails .dateDetails .otherDetails .far {
        margin-right: 5%;
    }

    /*** DOCK CENTER ***/

    .trainDetails .trainDestArrDetails Label,
    .trainDetails .trainTimeDetails Label {
        color: $primary;

        .ns-dark &{
            color: $white;
        }
    }

    .dock-center {
        flex-direction: column;
    }

    .dock-center .trainDetails {
        flex-direction: row;
        margin-top: 4%;
        height: 160;
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
        color: $primary;

        .ns-dark &{
            color: $white;
        }
    }

    .dock-center .trainDetails .route .template-line {
        flex-direction: row;
        height: 77%;
    }

    .dock-center .trainDetails .route .template-line .line {
        border-left-color: $primary;
        border-left-style: solid;
        border-left-width: 4px;
        /*Ios*/
        width: 4px;

        .ns-dark &{
            border-left-color: $white;
        }
    }

    .dock-center .trainDetails .trainDestArrDetails {
        flex-direction: column;
        justify-content: space-between;
        margin-right: 4%;
    }

    .dock-center .trainDetails .trainDestArrDetails .departure {
        padding-bottom: 8%;
        border-bottom-color: $white;
        border-bottom-style: solid;
        border-bottom-width: 3px;
    }

    .dock-center .trainDetails .trainDestArrDetails .arrival {
        padding-top: 8%;
        border-top-color: $white;
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
    }

    .dock-center .extraDetails {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: $primary;
        margin-left: 2%;
        margin-right: 2%;

        .ns-dark &{
            color: $white;
        }
    }

    .dock-center .extraDetails .prices {
        flex-direction: column;
        align-items: center;
    }

    .dock-center .extraDetails .prices .fas {
        font-size: 20;
    }

    .dock-center .extraDetails .prices .text {
        /*padding-left: 4%;*/
    }

    .dock-center .extraDetails .prices Label {
        margin-top: 4%;
    }

    /****** GENERATE FROM COMPUTED smallerTextPrices() ******/

    .dock-center .extraDetails .prices .smallerTextPrices.text{
        font-size: 12;
    }

    /****** GENERATE FROM COMPUTED smallerTextPrices() ******/

    .dock-top .top .top-title .titles .smallerTopTitle{
        font: 20;
    }

    @import "../../theme/trainVariables";

</style>
