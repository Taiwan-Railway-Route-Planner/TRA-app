<template>
    <Page actionBarHidden="true" @loaded="pageLoaded" @unloaded="pageUnloaded">
        <DockLayout>
            <DockLayout v-show="search">
                <FlexboxLayout dock="top" class="searchBar">
                    <FlexboxLayout>
                        <Label class="fas" :text="'\uf060' | unescape" @tap="goBackToNormalScreen"/>
                        <SearchBar :hint="data.searchBar.hintText.now" v-model="data.searchBar.search"
                                   :text="data.searchBar.search" @textChange="onTextChanged"
                                   @clear="goBackToNormalScreen"/>
                    </FlexboxLayout>
                    <Counties v-if="!isFetching" ref="counties" :data="data" :selectedCounty="selectedCounty" :hideThis="hideThis" @changeTheSelectedOne="changeTheSelectedOne"/>
                </FlexboxLayout>
                <FlexboxLayout dock="center" class="listView">
                    <ScrollView>
                        <ListView v-if="$store.state.language === 'ZH'" class="listGroup" for="item in filteredStations" @itemTap="onItemTap" separatorColor="transparent">
                            <v-template>
                                <Label :text="item.站名 + ' (' + item.traWebsiteCode + ')' "/>
                            </v-template>
                        </ListView>
                        <ListView v-else class="listGroup" for="item in filteredStations" @itemTap="onItemTap" separatorColor="transparent">
                            <v-template>
                                <ScalingLabel :text="item.eng站名 + ' (' + item.站名 + ')' +  ' - ' + item.traWebsiteCode"/>
                            </v-template>
                        </ListView>
                    </ScrollView>
                </FlexboxLayout>
            </DockLayout>
            <FlexboxLayout dock="bottom" class="bottom-menu">
                <FlexboxLayout class="menu-choose">
                    <Label class="fas" :text="'\uf3c5' | unescape"/>
                </FlexboxLayout>
                <FlexboxLayout class="menu-choose" @tap="navToStar">
                    <!--<Label class="fas" :text="'\uf005' | unescape"></Label>-->
                </FlexboxLayout>
                <FlexboxLayout class="menu-choose" @tap="navToSet">
                    <Label class="fas" :text="'\uf509' | unescape"/>
                </FlexboxLayout>
            </FlexboxLayout>
            <DockLayout class="routeDetails" v-show="!search">
                <FlexboxLayout class="mainMenu">
                    <Label class="title" text="TRA Route Planner"/>
                    <StackLayout dock="top" class="topRouteDetails">

                        <StackLayout v-if="$store.state.language === 'ZH'" class="routeDetailsChoice">
                            <FlexboxLayout class="InfoDetails">
                                <FlexboxLayout class="text">
                                    <FlexboxLayout class="NavigateIn" @tap="showSearch(true)">
                                        <Label class="labelForStandard" @tap="showSearch(true)" :text="data.routeDetails.departure.label"/>
                                        <TextField class="textFieldForStandard" @tap="showSearch(true)" editable="false" v-model="data.routeDetails.departure.details.站名" :hint="data.routeDetails.departure.hint"/>
                                    </FlexboxLayout>
                                    <FlexboxLayout class="NavigateIn" @tap="showSearch(false)">
                                        <Label class="labelForStandard" @tap="showSearch(false)" :text="data.routeDetails.arrival.label"/>
                                        <TextField class="textFieldForStandard" @tap="showSearch(false)" editable="false" v-model="data.routeDetails.arrival.details.站名" :hint="data.routeDetails.arrival.hint"/>
                                    </FlexboxLayout>
                                </FlexboxLayout>
                                <Label class="fas" @tap="switchDestinationAndArrival" :text="'\uf362' | unescape"/>
                            </FlexboxLayout>
                        </StackLayout>

                        <StackLayout v-else class="routeDetailsChoice">
                            <FlexboxLayout class="InfoDetails">
                                <FlexboxLayout class="text">
                                    <FlexboxLayout class="NavigateIn" @tap="showSearch(true)">
                                        <Label :class="layoutStateLabel" @tap="showSearch(true)" :text="data.routeDetails.departure.label"/>
                                        <TextField :class="layoutStateTextField" @tap="showSearch(true)" editable="false" v-model="data.routeDetails.departure.details.eng站名" :hint="data.routeDetails.departure.hint"/>
                                    </FlexboxLayout>
                                    <FlexboxLayout class="NavigateIn" @tap="showSearch(false)">
                                        <Label :class="layoutStateLabel" @tap="showSearch(false)" :text="data.routeDetails.arrival.label"/>
                                        <TextField :class="layoutStateTextField" @tap="showSearch(false)" editable="false" v-model="data.routeDetails.arrival.details.eng站名" :hint="data.routeDetails.arrival.hint"/>
                                    </FlexboxLayout>
                                </FlexboxLayout>
                                <Label class="fas" @tap="switchDestinationAndArrival" :text="'\uf362' | unescape"/>
                            </FlexboxLayout>
                        </StackLayout>

                        <FlexboxLayout class="InfoDetails timeDetails">
                            <Label :class="layoutStateLabelForTimeStamp" :text="data.routeDetails.time.label"/>
                            <TextField :class="layoutStateTextFieldForTimeStamp" @tap="showTime" editable="false" :hint="data.routeDetails.time.hint" :text="data.routeDetails.time.date.show + data.routeDetails.time.time"/>
                        </FlexboxLayout>
                        <FlexboxLayout class="confirmBtn" @tap="confirmSearch">
                            <Button class="btn btn-sq btn-wt" :text="data.routeDetails.button" @tap="confirmSearch"/>
                        </FlexboxLayout>
                    </StackLayout>
                </FlexboxLayout>
            </DockLayout>
        </DockLayout>
    </Page>
</template>

<script>

    import handle from "../../assets/js/Vue/Select/handle"
    import formatTimeStampBasedOnLanguage from "../../assets/js/Vue/formatTimeStampBasedOnLanguage"
    import modal from "../../components/modals/modal.component"
    import loadingModal from "../../components/loading-modal/loading-modal.component"
    import Counties from "../../components/county-list/county-list.component"

    import { isIOS } from "tns-core-modules/platform";
    let application = require('application');
    const utils = require('utils/utils');

    export default {
        async created() {
            this.formatTimeStampBasedOnLanguage = formatTimeStampBasedOnLanguage;
            await handle.setUpSelectVue(this);
        },
        components: {
            Counties
        },
        computed: {
            layoutStateLabel() {
                switch (this.$store.state.language) {
                    case 'ES':
                        return 'labelForSpanish';
                    case 'AR':
                        return 'labelForArmenian';
                    case 'FR':
                    case 'RU':
                        return 'labelForFrench';
                    default:
                        return 'labelForStandard'
                }
            },
            layoutStateTextField() {
                switch (this.$store.state.language) {
                    case 'ES':
                        return 'textFieldForSpanish';
                    case 'AR':
                        return 'textFieldForArmenian';
                    default:
                        return 'textFieldForStandard'
                }
            },
            layoutStateLabelForTimeStamp() {
                switch (this.$store.state.language) {
                    case "ES":
                    case 'AR':
                        return "timeStampLabelForSpanish";
                    case "DE":
                        return "timeStampLabelForGerman";
                    case 'FR':
                    case 'RU':
                        return 'timeStampLabelForFrench';
                    default:
                        return "labelForStandard";
                }
            },
            layoutStateTextFieldForTimeStamp() {
                switch (this.$store.state.language) {
                    case "ES":
                    case 'AR':
                        return "timeStampTextFieldForSpanish";
                    case "DE":
                        return "timeStampTextFieldForGerman";
                    default:
                        return "textFieldForStandard";
                }
            }
        },
        data() {
            return {
                formatTimeStampBasedOnLanguage: null,
                data: null,
                filteredStations: null,
                departureOrArrival: null,
                search: false,
                someDate: "",
                timeTable: null,
                indexWithClosestToRealTime: null,
                feedback: null,
                selectedCounty: {
                    name: {
                        縣市: null,
                        eng縣市: null
                    },
                    prop: null
                },
                hideThis: false,
                countyFilterStations: null,
                isFetching: true
            }
        },
        methods: {
            changeTheSelectedOne: function (prop, ref=this.$refs.counties.$refs){
                handle.changeTheDefaultCounty(this, prop, ref);
                handle.filterCountiesOutOfTheListOfStations(this);
            },
            onTextChanged: function () {
                this.filteredStations = this.countyFilterStations
                    .filter(el => {
                        return el.eng站名.toLowerCase().startsWith(this.data.searchBar.search.toLowerCase())
                            ||
                            el.站名.toLowerCase().startsWith(this.data.searchBar.search.toLowerCase())
                            ||
                            el.traWebsiteCode.startsWith(this.data.searchBar.search.toLowerCase())
                    });
            },
            filterOneItem: function () {
                //TODO filter departure or arrival station
            },
            onItemTap: function (event) {
                if (this.departureOrArrival) {
                    this.data.routeDetails.departure.details = event.item;
                } else {
                    this.data.routeDetails.arrival.details = event.item;
                }
                this.goBackToNormalScreen();
            },
            goBackToNormalScreen: function () {
                this.search = false;
                if (isIOS) {
                    UIApplication.sharedApplication.keyWindow.endEditing(true);
                }
            },
            showSearch: async function (departureOrArrival) {
                const isntEmpty = await handle.checkFirstIfTheElementsArentEmpty(this);
                if (isntEmpty) {
                    this.data.searchBar.search = "";
                    this.search = true;
                    this.departureOrArrival = departureOrArrival;
                    if (departureOrArrival) {
                        this.data.searchBar.hintText.now = this.data.searchBar.hintText.startStation;
                    } else {
                        this.data.searchBar.hintText.now = this.data.searchBar.hintText.endStation;
                    }
                }
            },
            confirmSearch: async function () {
                await handle.controlValuesBeforeGoingToRoute(this, loadingModal);
            },
            showTime: function () {
                this.$showModal(modal, {
                        props: {
                            time: this.data.routeDetails.time,
                            formatTimeStampBasedOnLanguage: this.formatTimeStampBasedOnLanguage
                        }
                    }
                );
            },
            navToStar: function () {

            },
            navToSet: function () {
                this.$goto("Settings");
            },
            switchDestinationAndArrival: function () {
                let switchDetails = this.data.routeDetails.departure.details;
                this.data.routeDetails.departure.details = this.data.routeDetails.arrival.details;
                this.data.routeDetails.arrival.details = switchDetails;
            },
            pageLoaded: function () {
                // We only want to register the event in Android
                if (application.android) {
                    application.android.on(application.AndroidApplication.activityBackPressedEvent, this.backEvent);
                }
            },
            pageUnloaded: function () {
                // We only want to un-register the event on Android
                if (application.android) {
                    application.android.off(application.AndroidApplication.activityBackPressedEvent, this.backEvent);
                }
            },
            backEvent: function (args) {
                if (this.search) {
                    args.cancel = true;
                    this.search = false;
                } else {
                    args.cancel = false;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../theme/variables";
    @import "../../theme/generalStyles";

    .routeDetailsChoice,
    .timeDetails{
        Label,
        TextField{

            .ns-dark &{
                color: $white;
            }
        }
    }

    .topRouteDetails .InfoDetails{

        .fas{

            .ns-dark &{
                color: $white;
            }
        }

        .ns-dark &{
            background-color: black;
        }
    }

    .confirmBtn{

        .ns-dark &{
            border-color: $white;
            background-color: $dark;
            color: $white;
        }
    }

    .mainMenu {
        flex-direction: column;
    }

    .title {
        font-size: 25;
        color: $white;
        align-self: center;
        margin-top: 5%;
    }

    .searchBar {
        width: 100%;
        margin-top: 1%;
        display: flex;
        flex-flow: column;
        text-align: center;

        Label {
            margin-left: 5;
            width: 6%;
        }

        SearchBar {
            width: 94%;
        }
    }

    .listView {
        height: 100%;
    }

    .listView Label {
        padding-top: 4%;
        font-size: 18;
        padding-left: 15%;
    }

    .listGroup {
        flex: 1 1 auto;
    }

    .listGroup Label{
        /*Android*/
        /*padding-bottom: 4;*/
        /*padding-top: 4;*/
        /*Ios*/
        padding-bottom: 8;
        padding-top: 8;
    }

    .routeDetails {
        background-color: $primary;
    }

    .topRouteDetails {
        margin-top: 5%;
    }

    .topRouteDetails .InfoDetails {
        border-color: $primary;
        border-radius: 20;
        border-style: solid;
        border-width: 1;
        flex-direction: column;
        background-color: $white;
        width: 90%;
        /*Android*/
        /*padding: 12 4;*/
        /*Ios*/
        padding: 24 8;
    }

    .topRouteDetails .routeDetailsChoice .InfoDetails {
        flex-direction: row;
        align-items: center;
    }

    .topRouteDetails .InfoDetails .text {
        flex-direction: column;
        width: 85%;
        /*iOS*/
        justify-content: space-between;
        height: 150px;
    }

    .topRouteDetails .InfoDetails .fas {
        color: $primary;
        align-self: center;
    }

    .topRouteDetails .timeDetails {
        margin-top: 5%;
        flex-direction: row;
        justify-content: center;
    }

    .confirmBtn {
        flex-direction: row;
        justify-content: center;
        width: 80%;
        margin-top: 8%;
        border-color: $white;
        border-style: solid;
        border-width: 2px;
    }

    /****** GENERATE FROM COMPUTED layoutStateLabel() ******/
    /****** label ******/

    .labelForStandard {
        width: 15%;
        align-self: center;
    }

    .labelForSpanish {
        width: 25%;
        align-self: center;
    }

    .labelForFrench {
        width: 20%;
        align-self: center;
    }

    .labelForArmenian{
        width: 28%;
        align-self: center;
    }

    /****** GENERATE FROM COMPUTED layoutStateTextField() ******/
    /****** textField ******/

    .textFieldForStandard {
        width: 70%;
        margin-right: 6%;
    }

    .textFieldForSpanish {
        width: 65%;
        margin-right: 6%;
    }

    .textFieldForGerman {
        width: 62%;
        margin-right: 6%;
    }

    .textFieldForArmenian{
        width: 62%;
        margin-right: 6%;
    }

    /****** GENERATE FROM COMPUTED layoutStateLabelForTimeStamp() ******/
    /****** timeStamp -- Label ******/

    .timeStampLabelForSpanish {
        width: 35%;
        align-self: center;
    }

    .timeStampLabelForGerman {
        width: 38%;
        font-size: 14;
        align-self: center;
    }

    .timeStampLabelForFrench {
        width: 20%;
        align-self: center;
    }

    /****** GENERATE FROM COMPUTED layoutStateTextField() ******/
    /****** timeStamp -- TextField ******/

    .timeStampTextFieldForSpanish {
        width: 65%;
        font-size: 14;
        margin-right: 6%;
    }

    .timeStampTextFieldForGerman {
        width: 52%;
        font-size: 14;
        margin-right: 6%;
    }

</style>
