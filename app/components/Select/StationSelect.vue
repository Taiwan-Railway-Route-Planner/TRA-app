<template>
    <Page actionBarHidden="true">
        <DockLayout>
            <FlexboxLayout dock="top" class="searchBar">
                <SearchBar :hint="data.searchBar.hintText.now" v-model="data.searchBar.search" :text="data.searchBar.search" @textChange="onTextChanged" @submit="onSubmit"></SearchBar>
            </FlexboxLayout>
            <FlexboxLayout dock="center" class="listView">
                <ScrollView>
                    <ListView v-if="$store.state.language === 'EN'" class="listGroup" for="item in filteredStations" @itemTap="onItemTap" separatorColor="transparent">
                        <v-template>
                            <Label :text="item.eng站名 + ' (' + item.traWebsiteCode + ')' "></Label>
                        </v-template>
                    </ListView>
                    <ListView v-else class="listGroup" for="item in data.resultDetails.stations" @itemTap="onItemTap" separatorColor="transparent">
                        <v-template>
                            <Label :text="item.站名 + ' (' + item.traWebsiteCode + ')' "></Label>
                        </v-template>
                    </ListView>
                </ScrollView>
            </FlexboxLayout>
        </DockLayout>
    </Page>
</template>

<script>
    import handle from "../../assets/js/Vue/Select/handle"

    export default {
        async created() {
            console.log("hey");
            await handle.setUpSelectVue(this);
        },
        data() {
            return {
                data: null,
                filteredStations: []
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
            onSubmit: function () {

            },
            onItemTap: function (event) {
                console.log(event.index);
                console.log(event.item);
            }
        }
    }
</script>

<style scoped>

    .searchBar {
        width: 100%;
        margin-top: 2%;
        display: flex;
        flex-flow: column;
    }

    .searchBar SearchBar {
        flex: 0 1 auto;
    }

    .listView Label {
        padding-top: 4%;
        font-size: 18;
    }

    .listGroup {
        flex: 1 1 auto;
    }

</style>