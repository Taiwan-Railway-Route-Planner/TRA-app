<template>
    <Page actionBarHidden="true">
        <DockLayout>
            <FlexboxLayout dock="top" class="dock-top">
                <FlexboxLayout class="title" @tap="navigateBackVue">
                    <Label class="fas" :text="'\uf060' | unescape"/>
                    <Label class="" :text="data.top.title"/>
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout dock="bottom" class="bottom-menu">
                <FlexboxLayout class="menu-choose" @tap="navToStart">
                    <Label class="fas" :text="'\uf3c5' | unescape"/>
                </FlexboxLayout>
                <FlexboxLayout class="menu-choose" @tap="navToStar">
                    <!--<Label class="fas" :text="'\uf005' | unescape"></Label>-->
                </FlexboxLayout>
                <FlexboxLayout class="menu-choose">
                    <Label class="fas" :text="'\uf509' | unescape"/>
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout dock="center" class="dock-center">
                <FlexboxLayout class="information">
                    <Label class="message" textWrap="true" :text="data.information.intro"/>
                    <ListView class="listGroup" for="item in languages" separatorColor="transparent">
                        <v-template>
                            <FlexboxLayout class="languageDetails">
                                <Label :text="item.name"/>
                            </FlexboxLayout>
                        </v-template>
                    </ListView>
                    <FlexboxLayout class="button">
                        <Button class="btn btn-wt" :text="data.information.btn" @tap="goToTranslatingPage"/>
                    </FlexboxLayout>
                </FlexboxLayout>
                <FlexboxLayout class="thankyou">
                    <Label class="message" textWrap="true" :text="data.thanks.intro"/>
                    <ListView class="listGroup" for="item in persons" separatorColor="transparent">
                        <v-template>
                            <FlexboxLayout class="detailsPerson">
                                <Label class="" :text="item.name"/>
                                <Label class="spaceAround" :text="item.language"/>
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

    const utils = require('utils/utils');
    
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
                    },
                    {
                        name: "Marvin Plum",
                        language: "Deutsch (German)"
                    },
                    {
                        name: 'Hayk Avetisyan',
                        language: 'Հայերեն (Armenian)'
                    },
                    {
                        name: 'Hayk Avetisyan',
                        language: 'Русский (Russian)'
                    }
                ],
                languages: [
                    {
                        name: "Pilipino"
                    },
                    {
                        name: "日本語"
                    },
                    {
                        name: "ไทย"
                    },
                    {
                        name: "Tiếng việt"
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
            },
            navigateBackVue: function () {
                this.$navigateBack();
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../theme/variables";
    @import "../../theme/generalStyles";


    .dock-top {
        background-color: $primary;
        color: $white;
        height: 10%;

        .ns-dark &{
            background-color: $dark-primary;
            color: $dark-white
        }
    }

    .dock-top .title {
        flex-direction: row;
        align-items: center;
    }

    .dock-top .title .fas{
        margin-left: 6%;
        margin-right: 5%;
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
        display: flex;
        flex-direction: column;
        margin-left: 2%;
        margin-right: 2%;
    }

    .dock-center .information .button{
        margin-top: 4%;
        flex-direction: row;
        justify-content: center;
    }

    .dock-center .information .button .btn{
        width: 60%;
    }

    .dock-center .thankyou .message,
    .dock-center .information .message{
        margin-top: 4%;
        margin-bottom: 4%;
    }


    .dock-center .thankyou .listGroup,
    .dock-center .information .listGroup {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .dock-center .thankyou .listGroup .detailsPerson,
    .dock-center .information .listGroup .languageDetails{
        flex-direction: row;
        justify-content: center;
        padding-top: 10%;
        font-size: 14;
    }

    .dock-center .thankyou .listGroup .detailsPerson .spaceAround{
        padding-left: 4%;
    }

</style>
