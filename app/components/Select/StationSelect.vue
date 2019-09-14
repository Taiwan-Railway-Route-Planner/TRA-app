<template>
    <Page actionBarHidden="true" @loaded="pageLoaded" @unloaded="pageUnloaded">
        <DockLayout>
            <DockLayout v-show="search">
                <FlexboxLayout dock="top" class="searchBar">
                    <SearchBar :hint="data.searchBar.hintText.now" v-model="data.searchBar.search" :text="data.searchBar.search" @textChange="onTextChanged"></SearchBar>
                </FlexboxLayout>
                <FlexboxLayout dock="center" class="listView">
                    <ScrollView>
                        <ListView v-if="$store.state.language === 'ZH'" class="listGroup" for="item in filteredStations" @itemTap="onItemTap" separatorColor="transparent">
                            <v-template>
                                <Label :text="item.站名 + ' (' + item.traWebsiteCode + ')' "></Label>
                            </v-template>
                        </ListView>
                        <ListView v-else class="listGroup" for="item in filteredStations" @itemTap="onItemTap" separatorColor="transparent">
                            <v-template>
                                <Label :text="item.eng站名 + ' (' + item.traWebsiteCode + ')' "></Label>
                            </v-template>
                        </ListView>
                    </ScrollView>
                </FlexboxLayout>
            </DockLayout>
            <FlexboxLayout dock="bottom" class="bottom-menu">
                <FlexboxLayout class="menu-choose">
                    <Label class="fas" :text="'\uf3c5' | unescape"></Label>
                </FlexboxLayout>
                <FlexboxLayout class="menu-choose" @tap="navToStar">
                    <!--<Label class="fas" :text="'\uf005' | unescape"></Label>-->
                </FlexboxLayout>
                <FlexboxLayout class="menu-choose" @tap="navToSet">
                    <Label class="fas" :text="'\uf509' | unescape"></Label>
                </FlexboxLayout>
            </FlexboxLayout>
            <DockLayout class="routeDetails" v-show="!search">
                <FlexboxLayout class="mainMenu">
                    <Label class="title" text="TRA Route Planner"></Label>
                    <StackLayout dock="top" class="topRouteDetails">

                        <StackLayout v-if="$store.state.language === 'ZH'" class="routeDetailsChoice">
                            <FlexboxLayout class="InfoDetails">
                                <FlexboxLayout class="text">
                                    <FlexboxLayout class="NavigateIn" @tap="showSearch(true)">
                                        <Label @tap="showSearch(true)" :text="data.routeDetails.departure.label"></Label>
                                        <TextField @tap="showSearch(true)" editable="false" v-model="data.routeDetails.departure.details.站名" :hint="data.routeDetails.departure.hint"></TextField>
                                    </FlexboxLayout>
                                    <FlexboxLayout class="NavigateIn" @tap="showSearch(false)">
                                        <Label @tap="showSearch(false)" :text="data.routeDetails.arrival.label"></Label>
                                        <TextField @tap="showSearch(false)" editable="false" v-model="data.routeDetails.arrival.details.站名" :hint="data.routeDetails.arrival.hint"></TextField>
                                    </FlexboxLayout>
                                </FlexboxLayout>
                                <Label class="fas" @tap="switchDestinationAndArrival" :text="'\uf362' | unescape"></Label>
                            </FlexboxLayout>
                        </StackLayout>

                        <StackLayout v-else class="routeDetailsChoice">
                            <FlexboxLayout class="InfoDetails">
                                <FlexboxLayout class="text">
                                    <FlexboxLayout class="NavigateIn" @tap="showSearch(true)">
                                        <Label @tap="showSearch(true)" :text="data.routeDetails.departure.label"></Label>
                                        <TextField @tap="showSearch(true)" editable="false" v-model="data.routeDetails.departure.details.eng站名" :hint="data.routeDetails.departure.hint"></TextField>
                                    </FlexboxLayout>
                                    <FlexboxLayout class="NavigateIn" @tap="showSearch(false)">
                                        <Label @tap="showSearch(false)" :text="data.routeDetails.arrival.label"></Label>
                                        <TextField @tap="showSearch(false)" editable="false" v-model="data.routeDetails.arrival.details.eng站名" :hint="data.routeDetails.arrival.hint"></TextField>
                                    </FlexboxLayout>
                                </FlexboxLayout>
                                <Label class="fas" @tap="switchDestinationAndArrival" :text="'\uf362' | unescape"></Label>
                            </FlexboxLayout>
                        </StackLayout>

                        <FlexboxLayout class="InfoDetails timeDetails">
                            <Label :text="data.routeDetails.time.label"></Label>
                            <TextField @tap="showTime" editable="false" :hint="data.routeDetails.time.hint" :text="data.routeDetails.time.date.show + data.routeDetails.time.time"></TextField>
                        </FlexboxLayout>
                        <FlexboxLayout class="confirmBtn" @tap="confirmSearch">
                            <Button class="btn btn-sq btn-wt" :text="data.routeDetails.button" @tap="confirmSearch"></Button>
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
    import timeModal from "../modals/timeModal"
    import loadingModal from "../modals/loadingModal"

    let application = require('application');

    export default {
        async created() {
            this.formatTimeStampBasedOnLanguage = formatTimeStampBasedOnLanguage;
            await handle.setUpSelectVue(this);
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
                topmost: null
            }
        },
        methods: {
            onTextChanged: function () {
                this.filteredStations = this.data.stationInfo.stations
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
                this.search = false;
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
                this.$showModal(timeModal, {
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

<style scoped>

    .mainMenu {
        flex-direction: column;
    }

    .title {
        font-size: 25;
        color: #ffffff;
        align-self: center;
        margin-top: 5%;
    }

    .searchBar {
        width: 100%;
        margin-top: 1%;
        display: flex;
        flex-flow: column;
    }

    .searchBar SearchBar {
        flex: 0 1 auto;
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

    .routeDetails {
        background-color: #1a0dab;
    }

    .topRouteDetails {
        margin-top: 5%;
    }

    .topRouteDetails .NavigateIn {
        flex-direction: row;
        width: 100%;
        justify-content: center;
    }

    .topRouteDetails Label {
        width: 15%;
        margin-left: 2%;
        align-self: center;
    }

    .topRouteDetails TextField {
        width: 70%;
        margin-right: 6%;
    }

    .topRouteDetails .InfoDetails {
        border-color: #1a0dab;
        border-radius: 20;
        border-style: solid;
        border-width: 1;
        flex-direction: column;
        background-color: white;
        width: 90%;
        padding: 12 4;
    }

    .topRouteDetails .routeDetailsChoice .InfoDetails {
        flex-direction: row;
    }

    .topRouteDetails .InfoDetails .text {
        flex-direction: column;
        width: 85%;
    }

    .topRouteDetails .InfoDetails .fas {
        color: #1a0dab;
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
        border-color: #fff;
        border-style: solid;
        border-width: 2px;
    }

</style>