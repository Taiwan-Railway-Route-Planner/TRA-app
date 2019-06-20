<template>
    <Page actionBarHidden="true">
<!--        <en-station-select v-if="$store.state.language === 'EN'"></en-station-select>-->
<!--        <zh-station-select v-else></zh-station-select>-->
        <DockLayout>
            <FlexboxLayout dock="center" class="searchBar">
                <SearchBar :hint="data.searchBar.hintText.now" :text="data.searchBar.search" @textChange="onTextChanged" @submit="onSubmit"></SearchBar>
            </FlexboxLayout>
        </DockLayout>
    </Page>
</template>

<script>
    // import enStationSelect from "./enStationSelect"
    // import zhStationSelect from "./zhStationSelect"

    // export default {
    //     created() {
    //        console.log(this.$store.state.language)
    //     },
    //     components: {zhStationSelect, enStationSelect}
    // }


    import handle from "../../assets/js/Vue/Select/handle"

    export default {
        async created(){
            await handle.setUpSelectVue(this);
        },
        data() {
            return {
                data: null
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

    .searchBar{
        width: 100%;
    }


</style>