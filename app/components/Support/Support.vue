<template>
    <Page actionBarHidden="true">
        <DockLayout>
            <FlexboxLayout dock="top" class="dock-top">
                <FlexboxLayout class="title">
                    <Label class="" :text="data.top.title"></Label>
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout dock="bottom" class="bottom-menu">
                <FlexboxLayout class="menu-choose" @tap="navToStart">
                    <Label class="fas" :text="'\uf3c5' | unescape"></Label>
                </FlexboxLayout>
                <FlexboxLayout class="menu-choose" @tap="navToStar">
                    <!--<Label class="fas" :text="'\uf005' | unescape"></Label>-->
                </FlexboxLayout>
                <FlexboxLayout class="menu-choose">
                    <Label class="fas" :text="'\uf509' | unescape"></Label>
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout dock="center" class="dock-center">

            </FlexboxLayout>
        </DockLayout>
    </Page>
</template>

<script>
    
    import handle from "../../assets/js/Vue/Support/handle"
    
    export default {
        created: function () {
            handle.handleSetUpOfVue(this);
        },
        data () {
            return {
                data: null
            }
        },
        methods: {
            navToStart: function () {
                this.$goto("Select");
            },
            navToStar: function () {

            }
        }
    }
</script>

<style scoped>

    .dock-top {
        background-color: #1a0dab;
        color: #fff;
        height: 10%;
    }

    .dock-top .title {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .dock-top .title Label {
        font-size: 24;
    }



</style>