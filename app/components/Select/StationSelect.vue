<template>
    <Page actionBarHidden="true">

        <DockLayout>
            <FlexboxLayout dock="top" class="topBar">
                <Label class="fas" :text="'\uf013' | unescape"></Label>
            </FlexboxLayout>
            <FlexboxLayout dock="center" class="searchBar">
                <SearchBar :hint="data.searchBar.hintText.now" :text="data.searchBar.search" @textChange="onTextChanged" @submit="onSubmit"></SearchBar>
            </FlexboxLayout>
        </DockLayout>
    </Page>
</template>

<script>
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