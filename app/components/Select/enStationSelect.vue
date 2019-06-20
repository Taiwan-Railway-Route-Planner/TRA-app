<template>
    <Page actionBarHidden="true">
        <DockLayout dock="center">
            <SearchBar :hint="searchBar.hintText.now" :text="searchBar.search" @textChange="onTextChanged" @submit="onSubmit"></SearchBar>
        </DockLayout>
    </Page>
</template>

<script>
    import handle from "../../assets/js/Vue/Select/handle"

    export default {
        created(){
            console.log("test");
            this.searchBar.hintText.now = this.searchBar.hintText.startStation;
            console.log("456");
        },
        data() {
            return {
                stationInfo: null,
                searchBar: {
                    hintText: {
                        now: '',
                        startStation:  'Choose your departure station',
                        endStation: 'Choose your arrival station'
                    },
                    search: null
                },
                routeDetails: {
                    departure: {},
                    arrival: {}
                }
            }
        },
        methods: {
            onTextChanged: function () {

            },
            onSubmit: function () {

            }
        }
    }
</script>

<style scoped>

</style>