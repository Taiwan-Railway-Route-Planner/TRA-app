<template>
    <Page actionBarHidden="true">
        <DockLayout>
            <FlexboxLayout dock="top" class="dock-top">
                <FlexboxLayout class="top">
                    <FlexboxLayout class="top-title">
                        <FlexboxLayout class="titles" @tap="navigateBack()">
                            <Label class="fas" :text="'\uf060' | unescape"></Label>
                            <Label :text="$props.language.details.top.title"></Label>
                        </FlexboxLayout>
                        <FlexboxLayout class="shareOptions">
                            <Label class="fas" :text="'\uf1e0' | unescape"></Label>
                            <Label class="far" :text="'\uf005' | unescape"></Label>
                        </FlexboxLayout>
                    </FlexboxLayout>
                    <FlexboxLayout class="routeDetails">
                        <FlexboxLayout class="timeDetails">
                            <Label :text="$props.selectTravelDetails.startTime"></Label>
                            <Label class="fas" :text="'\uf061' | unescape"></Label>
                            <Label :text="$props.selectTravelDetails.endTime"></Label>
                        </FlexboxLayout>
                        <FlexboxLayout class="dateDetails">
                            <FlexboxLayout class="dateDetails">
                                <Label :text="$props.routeDetails.time.date.show"></Label>
                            </FlexboxLayout>
                            <FlexboxLayout class="otherDetails">
                                <Label class="far" :text="'\uf017' | unescape"></Label>
                                <Label :text="$props.selectTravelDetails.travelTime"></Label>
                            </FlexboxLayout>
                        </FlexboxLayout>
                    </FlexboxLayout>
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout dock="center" class="dock-center">
                <ListView for="item in $props.selectTravelDetails.Routes" class="listTrain" @itemTap="navigateToRouteDetails">
                    <v-template>
                        <FlexboxLayout class="oneTrainElement" flexDirection="column">
                            <FlexboxLayout class="whiteSpace">
                            </FlexboxLayout>
                            <FlexboxLayout class="trainDetails">
                                <FlexboxLayout class="trainTimeDetails">
                                    <Label :text="item.TimeInfos[item.departureStation].DepTime"></Label>
                                    <Label class="fas" :color="$props.language.trainTypes[item.trainType].color" :text="'\uf238' | unescape"></Label>
                                    <Label :text="item.TimeInfos[item.arrivalStation].ArrTime"></Label>
                                </FlexboxLayout>
                                <FlexboxLayout class="route">
                                    <Label class="far" :text="'\uf111' | unescape"></Label>
                                    <FlexboxLayout class="template-line">
                                        <Label class="line"></Label>
                                    </FlexboxLayout>
                                    <Label class="far" :text="'\uf111' | unescape"></Label>
                                </FlexboxLayout>
                                <FlexboxLayout class="trainDestArrDetails">
                                    <Label v-if="$store.state.language === 'ZH'" class="departure" :text="$store.state.searchFile[item.departureStation].站名"></Label>
                                    <Label v-else class="departure" :text="$store.state.searchFile[item.departureStation].eng站名"></Label>
                                    <FlexboxLayout class="trainDetailsIcons">
                                        <FlexboxLayout class="information">
                                            <Label :text="$props.language.trainTypes[item.trainType].name + ' ' + item.Train"></Label>
                                            <FlexboxLayout class="trainIcons">
                                                <Label v-if="item.BreastFeed === 'Y'" class="fas" :text="'\uf77c' | unescape"></Label>
                                                <Label v-if="item.Dinning === 'Y'" class="fas" :text="'\uf2e7' | unescape"></Label>
                                                <Label v-if="item.Cripple === 'Y'" class="fas" :text="'\uf193' | unescape"></Label>
                                                <Label v-if="item.Bike === 'Y'" class="fas" :text="'\uf206' | unescape"></Label>
                                            </FlexboxLayout>
                                        </FlexboxLayout>
                                        <FlexboxLayout class="navigation">
                                            <Label class="fas" :text="'\uf054' | unescape"></Label>
                                        </FlexboxLayout>
                                    </FlexboxLayout>
                                    <Label v-if="$store.state.language === 'ZH'" class="arrival" :text="$store.state.searchFile[item.arrivalStation].站名"></Label>
                                    <Label v-else class="arrival" :text="$store.state.searchFile[item.arrivalStation].eng站名"></Label>
                                </FlexboxLayout>
                            </FlexboxLayout>
                            <FlexboxLayout class="whiteSpace">
                            </FlexboxLayout>
                        </FlexboxLayout>
                    </v-template>
                </ListView>
            </FlexboxLayout>
        </DockLayout>
    </Page>
</template>

<script>

    export default {
        props: ['routeDetails', 'selectTravelDetails', 'language'],
        data() {
            return {}
        },
        methods: {
            navigateToRouteDetails: function (event) {
                this.$goto("RouteStopDetails", {
                    props: {
                        selectTravelDetails: event.item,
                        language: this.$props.language
                    }
                })
            }
        }
    }

</script>

<style scoped>

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
    .dock-top .top .routeDetails .dateDetails .otherDetails Label  {
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
        background-color: #1a0dab;
        color: #fff;
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

    .dock-center .trainDetails .trainDestArrDetails Label,
    .dock-center .trainDetails .trainTimeDetails Label {
        color: #1a0dab;
    }

    .dock-center .listTrain{
        margin-left: 5%;
    }

    .dock-center .listTrain .oneTrainElement{
        height: 180;
    }

    .dock-center .listTrain .whiteSpace{
        height: 10;
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
    }

</style>