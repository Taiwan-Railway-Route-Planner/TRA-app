<template>
    <Page actionBarHidden="true">
        <DockLayout>
            <DockLayout v-show="search">
                <FlexboxLayout dock="top" class="searchBar">
                    <SearchBar :hint="data.searchBar.hintText.now" v-model="data.searchBar.search" :text="data.searchBar.search" @textChange="onTextChanged"></SearchBar>
                </FlexboxLayout>
                <FlexboxLayout dock="center" class="listView">
                    <ScrollView>
                        <ListView v-if="$store.state.language === 'EN'" class="listGroup" for="item in filteredStations" @itemTap="onItemTap" separatorColor="transparent">
                            <v-template>
                                <Label :text="item.eng站名 + ' (' + item.traWebsiteCode + ')' "></Label>
                            </v-template>
                        </ListView>
                        <ListView v-else class="listGroup" for="item in filteredStations" @itemTap="onItemTap" separatorColor="transparent">
                            <v-template>
                                <Label :text="item.站名 + ' (' + item.traWebsiteCode + ')' "></Label>
                            </v-template>
                        </ListView>
                    </ScrollView>
                </FlexboxLayout>
            </DockLayout>
            <FlexboxLayout dock="bottom" class="bottom-menu">
                <FlexboxLayout class="menu-choose" @tap="">
                    <Label class="fas" :text="'\uf3c5' | unescape" ></Label>
                </FlexboxLayout>
                <FlexboxLayout class="menu-choose" @tap="navToStar">
                    <Label class="fas" :text="'\uf005' | unescape"></Label>
                </FlexboxLayout>
                <FlexboxLayout class="menu-choose" @tap="navToSet">
                    <Label class="fas" :text="'\uf509' | unescape"></Label>
                </FlexboxLayout>
            </FlexboxLayout>
            <DockLayout class="routeDetails" v-show="!search">
                <FlexboxLayout class="mainMenu">
                    <Label class="title" text="TRA Route Planner"></Label>
                    <StackLayout dock="top" class="topRouteDetails">
                        <StackLayout v-if="$store.state.language === 'EN'">
                            <FlexboxLayout class="InfoDetails">
                                <FlexboxLayout class="NavigateIn" @tap="showSearch(true)">
                                    <Label @tap="showSearch(true)" :text="data.routeDetails.departure.label"></Label>
                                    <TextField @tap="showSearch(true)" editable="false" v-model="data.routeDetails.departure.details.eng站名" :hint="data.routeDetails.departure.hint"></TextField>
                                </FlexboxLayout>
                                <FlexboxLayout class="NavigateIn" @tap="showSearch(false)">
                                    <Label @tap="showSearch(false)" :text="data.routeDetails.arrival.label"></Label>
                                    <TextField @tap="showSearch(false)" editable="false" v-model="data.routeDetails.arrival.details.eng站名" :hint="data.routeDetails.arrival.hint"></TextField>
                                </FlexboxLayout>
                            </FlexboxLayout>
                        </StackLayout>
                        <StackLayout v-else>
                            <FlexboxLayout class="InfoDetails">
                                <FlexboxLayout class="NavigateIn" @tap="showSearch(true)">
                                    <Label @tap="showSearch(true)" :text="data.routeDetails.departure.label"></Label>
                                    <TextField @tap="showSearch(true)" editable="false" v-model="data.routeDetails.departure.details.站名" :hint="data.routeDetails.departure.hint"></TextField>
                                </FlexboxLayout>
                                <FlexboxLayout class="NavigateIn" @tap="showSearch(false)">
                                    <Label @tap="showSearch(false)" :text="data.routeDetails.arrival.label"></Label>
                                    <TextField @tap="showSearch(false)" editable="false" v-model="data.routeDetails.arrival.details.站名" :hint="data.routeDetails.arrival.hint"></TextField>
                                </FlexboxLayout>
                            </FlexboxLayout>
                        </StackLayout>
                        <FlexboxLayout class="InfoDetails timeDetails">
                            <Label :text="data.routeDetails.time.label"></Label>
                            <TextField @tap="showTime" editable="false" :hint="data.routeDetails.time.hint" :text="data.routeDetails.time.date + data.routeDetails.time.time"></TextField>
                        </FlexboxLayout>
                    </StackLayout>
                </FlexboxLayout>
            </DockLayout>
        </DockLayout>
    </Page>
</template>

<script>
    import handle from "../../assets/js/Vue/Select/handle"
    import timeModal from "../modals/timeModal"

    export default {
        async created() {
            await handle.setUpSelectVue(this);
        },
        data() {
            return {
                data: null,
                filteredStations: [],
                departureOrArrival: null,
                search: false,
                someDate: ""
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
            showSearch: function (departureOrArrival) {
                this.search = true;
                this.departureOrArrival = departureOrArrival;
                if (departureOrArrival) {
                    this.data.searchBar.hintText.now = this.data.searchBar.hintText.startStation;
                } else {
                    this.data.searchBar.hintText.now = this.data.searchBar.hintText.endStation;
                }
            },
            showTime: function () {
                this.$showModal(timeModal, {
                        props: {
                            time: this.data.routeDetails.time
                        }
                    }
                );
            },
            navToStar: function () {
                
            },
            navToSet: function () {
                
            }
        }
    }
</script>

<style scoped>

    .mainMenu{
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

    .topRouteDetails .timeDetails {
        margin-top: 5%;
        flex-direction: row;
        justify-content: center;
    }

</style>