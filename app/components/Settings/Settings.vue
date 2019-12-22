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
                <FlexboxLayout class="settings">
                    <FlexboxLayout class="languagesSettings">
                        <FlexboxLayout class="listPickerLanguagesSettings">
                            <Label class="" :text="data.center.language.chooseTitle"></Label>
                            <FlexboxLayout>
                                <ListPicker :items="possibleLanguagesArray" v-model="selectedItem"></ListPicker>
                            </FlexboxLayout>
                        </FlexboxLayout>
                        <Button class="btn btn-wt" :text="data.center.language.button" @tap="saveNewLanguage"></Button>
                    </FlexboxLayout>
                    <FlexboxLayout class="otherInfo">
                        <FlexboxLayout class="element details" @tap="openMoreInfo">
                            <Label :class="layoutStateLabel" :text="data.center.otherInfo.support"></Label>
                            <Label class="fas" :text="'\uf054' | unescape"></Label>
                        </FlexboxLayout>
                        <FlexboxLayout class="element details" @tap="openGooglePlay">
                            <Label :class="layoutStateLabel" :text="data.center.otherInfo.rate"></Label>
                            <Label class="fas" :text="'\uf054' | unescape"></Label>
                        </FlexboxLayout>
                        <FlexboxLayout class="element details" @tap="openMail">
                            <Label :class="layoutStateLabel" :text="data.center.otherInfo.contactUs"></Label>
                            <Label class="fas" :text="'\uf054' | unescape"></Label>
                        </FlexboxLayout>
                        <FlexboxLayout class="element details" @tap="openGithub">
                            <Label :class="layoutStateLabel" :text="data.center.otherInfo.openSource"></Label>
                            <Label class="fas" :text="'\uf054' | unescape"></Label>
                        </FlexboxLayout>
                        <Label v-if="$store.state.language === 'ZH'" class="element" :text="currentVersion + ' ' + data.center.otherInfo.Version"></Label>
                        <Label v-else class="element" :text="data.center.otherInfo.Version + ' ' + currentVersion"></Label>
                    </FlexboxLayout>
                </FlexboxLayout>
            </FlexboxLayout>
        </DockLayout>
    </Page>
</template>

<script>

    import handle from "../../assets/js/Vue/Settings/handle";
    import { isIOS } from "tns-core-modules/platform";

    const utils = require('utils/utils');

    export default {
        created: function () {
            handle.handleSetUpOfVue(this);
            this.updateProp();
        },
        computed: {
            layoutStateLabel() {
                switch (this.$store.state.language) {
                    case 'ES':
                        return 'labelForSpanish';
                    case 'AR':
                        return 'labelForArmenian';
                    default:
                        return 'labelForStandard';
                }
            }
        },
        data() {
            return {
                data: null,
                possibleLanguages: null,
                possibleLanguagesArray: null,
                selectedItem: null,
                currentVersion: '0.0.5'
            }
        },
        methods: {
            navToStart: function () {
                this.$goto("Select");
            },
            navToStar: function () {

            },
            saveNewLanguage: function () {
                handle.saveLanguage(this);
                this.updateProp();
            },
            openMail: function () {
                utils.openUrl("mailto:support@traapp.tk");
            },
            openGooglePlay: function () {
                if (isIOS){
                    // TODO
                } else {
                    utils.openUrl("market://details?id=com.wingcrony.tra.app");
                }
            },
            openGithub: function () {
                utils.openUrl("https://github.com/Taiwan-Railway-Route-Planner/TRA-app")
            },
            openMoreInfo: function () {
                this.$goto("Support");
            },
            updateProp: function () {
                if (isIOS){
                    this.data.center.otherInfo.rate = this.data.center.otherInfo.rate.replace('Google Play', 'App Store');
                }
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

    .dock-center .settings {
        margin-left: 5%;
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

    .dock-center .settings {
        flex-direction: column;
    }

    .dock-center .settings .languagesSettings {
        flex-direction: column;
        width: 100%;
        height: 55%;
    }

    .dock-center .settings .languagesSettings .listPickerLanguagesSettings {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .dock-center .settings .languagesSettings .listPickerLanguagesSettings Label {
        font-size: 16;
    }

    .dock-center .settings .languagesSettings .listPickerLanguagesSettings listPicker {
        width: 40%;
        margin-left: 2%;
    }

    .dock-center .settings .otherInfo {
        flex-direction: column;
        height: 45%;
        margin-right: 4%;
    }

    .dock-center .settings .otherInfo .element {
        border-bottom-width: 2px;
        border-bottom-color: #D3D3D3;
        border-bottom-style: solid;
        padding-bottom: 10%;
        padding-top: 10%;
    }

    .dock-center .settings .otherInfo .details {
        flex-direction: row;
        justify-content: space-between;
    }

    .dock-center .settings .otherInfo .details .fas {
        font-size: 24;
    }

    /****** GENERATE FROM COMPUTED layoutStateLabel() ******/

    .labelStandard {
        font-size: 20;
    }

    .labelForSpanish {
        font-size: 16;
    }

    .labelForArmenian{
        font-size: 14;
    }

</style>
