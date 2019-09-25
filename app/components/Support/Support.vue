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
                <FlexboxLayout class="information">
                    <Label class="" textWrap="true" @tap="goToTranslatingPage" :text="data.information.intro"></Label>
                </FlexboxLayout>
                <FlexboxLayout class="thankyou">
                    <Label class="message" textWrap="true" :text="data.thanks.intro"></Label>
                    <ListView class="listGroup" for="item in persons" separatorColor="transparent">
                        <v-template>
                            <FlexboxLayout class="detailsPerson">
                                <Label class="" :text="item.name"></Label>
                                <Label class="spaceAround" :text="item.language"></Label>
                            </FlexboxLayout>
                        </v-template>
                    </ListView>
                </FlexboxLayout>
            </FlexboxLayout>
        </DockLayout>
    </Page>
</template>

<script>
    
    import handle from "../../assets/js/Vue/Support/handle"

    var utils = require('utils/utils');
    
    export default {
        created: function () {
            handle.handleSetUpOfVue(this);
        },
        data () {
            return {
                data: null,
                persons: [
                    {
                        name: "吳宛玲 Lilly Wu",
                        language: "中文 (Traditional Chinese)"
                    },
                    {
                        name: "Javier Pérez Gómez",
                        language: "Español (Spanish)"
                    }
                ]
            }
        },
        methods: {
            navToStart: function () {
                this.$goto("Select");
            },
            navToStar: function () {

            },
            goToTranslatingPage: function () {
                utils.openUrl("https://poeditor.com/join/project/9Aukv8rxJ5")
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

    .dock-center{
        flex-direction: column;
        width: 100%;
    }

    .dock-center .information,
    .dock-center .thankyou{
        margin-top: 6%;
        text-align: center;
    }

    .dock-center .thankyou{
        display: flex;
        flex-direction: column;
    }

    .dock-center .thankyou .message{
        margin-top: 4%;
    }

    .dock-center .thankyou .listGroup {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .dock-center .thankyou .listGroup .detailsPerson{
        flex-direction: row;
        justify-content: center;
        padding-top: 8%;
        font-size: 14;
    }

    .dock-center .thankyou .listGroup .detailsPerson .spaceAround{
        padding-left: 4%;
    }

</style>