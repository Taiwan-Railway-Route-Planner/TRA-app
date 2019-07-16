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
                    <Label class="fas" :text="'\uf005' | unescape"></Label>
                </FlexboxLayout>
                <FlexboxLayout class="menu-choose">
                    <Label class="fas" :text="'\uf509' | unescape"></Label>
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout dock="center" class="dock-center">
                <FlexboxLayout class="settings">
                    <FlexboxLayout class="languagesSettings">
                        <Label class="" :text="data.center.language.chooseTitle"></Label>
                        <FlexboxLayout>
                            <ListPicker :items="possibleLanguagesArray" v-model="selectedItem" @selectedIndexChange="selectedIndexChanged"></ListPicker>
                        </FlexboxLayout>
                    </FlexboxLayout>
                    <FlexboxLayout class="otherInfo">
                        <FlexboxLayout class="element details">
                            <Label :text="data.center.otherInfo.rate"></Label>
                            <Label class="fas" :text="'\uf054' | unescape"></Label>
                        </FlexboxLayout>
                        <FlexboxLayout class="element details">
                            <Label :text="data.center.otherInfo.contactUs"></Label>
                            <Label class="fas" :text="'\uf054' | unescape"></Label>
                        </FlexboxLayout>
                        <Label class="element" :text="data.center.otherInfo.Version + ' ' + currentVersion"></Label>
                    </FlexboxLayout>
                </FlexboxLayout>
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
        data() {
            return {
                data: null,
                possibleLanguages: null,
                possibleLanguagesArray: null,
                selectedItem: null,
                currentVersion: '0.0.1'
            }
        },
        methods: {
            navToStart: function () {
                this.$goto("Select");
            },
            navToStar: function () {

            },
            selectedIndexChanged: function () {
                handle.saveLanguage(this)
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
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60%;
    }

    .dock-center .settings .languagesSettings Label {
        font-size: 16;
    }

    .dock-center .settings .languagesSettings listPicker {
        width: 40%;
        margin-left: 2%;
    }

    .dock-center .settings .otherInfo {
        flex-direction: column;
        height: 40%;
        margin-right: 4%;
    }

    .dock-center .settings .otherInfo Label{
        font-size: 20;

    }

    .dock-center .settings .otherInfo .element{
        border-bottom-width: 2px;
        border-bottom-color: #D3D3D3;
        border-bottom-style: solid;
        padding-bottom: 10%;
        padding-top: 10%;
    }

    .dock-center .settings .otherInfo .details{
        flex-direction: row;
        justify-content: space-between;
    }

    .dock-center .settings .otherInfo .details .fas{
        font-size: 24;
    }

</style>