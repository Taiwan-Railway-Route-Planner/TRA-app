<template>
    <Page actionBarHidden="true">
        <DockLayout>
            <FlexboxLayout dock="top" class="dock-top">

            </FlexboxLayout>
            <FlexboxLayout dock="bottom" class="bottom-menu">
                <FlexboxLayout class="menu-choose" @tap="navToStart">
                    <Label class="fas" :text="'\uf3c5' | unescape"></Label>
                </FlexboxLayout>
                <FlexboxLayout class="menu-choose" @tap="navToStar">
                    <Label class="fas" :text="'\uf005' | unescape"></Label>
                </FlexboxLayout>
                <FlexboxLayout class="menu-choose" @tap="navToSet">
                    <Label class="fas" :text="'\uf509' | unescape"></Label>
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout dock="center" class="center">

            </FlexboxLayout>
        </DockLayout>
    </Page>
</template>

<script>

    import handle from "../../assets/js/Vue/Settings/handle"

    export default {
        created: function () {
            handle.handleSetUpOfVue(this);
        },
        data(){
            return {
                data: null
            }
        },
        methods: {
            navToStart: function () {
                
            },
            navToStar: function () {
                
            },
            navToSet: function () {
                
            }
        }
    }

</script>

<style scoped>

</style>