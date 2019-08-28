<template>
    <Page actionBarHidden="true">
        <DockLayout>
            <FlexboxLayout dock="top" class="dock-top">
                <FlexboxLayout class="top">
                    <FlexboxLayout class="top-title" @tap="navigateBack()">
                        <Label class="fas" :text="'\uf060' | unescape"></Label>
                        <Label :text="$props.language.stopDetails.top.title"></Label>
                    </FlexboxLayout>
                    <FlexboxLayout class="trainGeneral">
                        <FlexboxLayout class="element">
                            <Label class="fas" :color="$props.language.trainTypes[$props.selectTravelDetails.trainType].color" :text="'\uf238' | unescape"></Label>
                        </FlexboxLayout>
                        <FlexboxLayout class="element">
                            <Label class="title" :text="$props.language.stopDetails.top.type"></Label>
                            <Label :text="$props.language.trainTypes[$props.selectTravelDetails.trainType].name"></Label>
                        </FlexboxLayout>
                        <FlexboxLayout class="element last">
                            <Label class="title" :text="$props.language.stopDetails.top.number"></Label>
                            <Label :text="$props.selectTravelDetails.Train"></Label>
                        </FlexboxLayout>
                    </FlexboxLayout>
                    <FlexboxLayout class="trainIcons">
                        <Label v-if="$props.selectTravelDetails.BreastFeed === 'Y'" class="fas" :text="'\uf77c' | unescape"></Label>
                        <Label v-if="$props.selectTravelDetails.Dinning === 'Y'" class="fas" :text="'\uf2e7' | unescape"></Label>
                        <Label v-if="$props.selectTravelDetails.Cripple === 'Y'" class="fas" :text="'\uf193' | unescape"></Label>
                        <Label v-if="$props.selectTravelDetails.Bike === 'Y'" class="fas" :text="'\uf206' | unescape"></Label>
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
                                <Label v-if="$store.state.language === 'ZH'" class="" :text="item.站名"></Label>
                                <Label v-else class="" :text="item.eng站名"></Label>
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
        props: ['selectTravelDetails', 'language'],
        created: function () {
            handle.handle(this);
        },
        data() {
            return {
                orderedTimeInfo: [],
                startIndex: 0
            }
        },
        methods: {
            onLoaded() {
                // let _self = this;
                // setTimeout(function () {
                //     _self.$refs.myList.nativeView.scrollToIndex(_self.startIndex);
                // }, 3000)
            },
        }
    }
</script>

<style scoped>

    .dock-top {
        height: 26%;
    }

    .dock-center {
        height: 78%;
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
        height: 32%;
        width: 100%;
    }

    .dock-top .top .trainGeneral {
        flex-direction: row;
        justify-content: space-between;
        height: 40%;
        color: #1a0dab;
        background-color: #ffffff;
        border-radius: 20;
        border-style: solid;
        border-width: 1;
        border-color: #1a0dab;
        padding-right: 12;
        padding-left: 12;
        margin-bottom: 4%;
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
        height: 20%;
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