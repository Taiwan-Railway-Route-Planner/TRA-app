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
                <FlexboxLayout class="menu-choose" @tap="navToSet">
                    <Label class="fas" :text="'\uf509' | unescape"></Label>
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout dock="center" class="dock-center">
               <FlexboxLayout class="settings">
                   <FlexboxLayout class="languagesSettings">
                       <Label class="" :text="data.center.language.chooseTitle"></Label>
                       <FlexboxLayout class="listPicker">
                           <ListPicker :items="possibleLanguagesArray" v-model="selectedItem" @selectedIndexChange="selectedIndexChanged"></ListPicker>
                       </FlexboxLayout>
                   </FlexboxLayout>
                   <FlexboxLayout class="otherInfo">

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
        data(){
            return {
                data: null,
                possibleLanguages: null,
                possibleLanguagesArray: null,
                selectedItem: null
            }
        },
        methods: {
            navToStart: function () {
                this.$goto("Select");
            },
            navToStar: function () {
                
            },
            navToSet: function () {
                this.$goto("Settings");
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

    .dock-center .settings{
        margin-left: 5%;
    }

    .dock-top .title{
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .dock-top .title Label{
        font-size: 24;
    }

    .dock-center{

    }

    .dock-center .settings .languagesSettings{
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .dock-center .settings .languagesSettings Label{
        font-size: 16;
    }

    .dock-center .settings .languagesSettings listPicker{
        width: 40%;
        margin-left: 2%;
    }

    .dock-center .settings .otherInfo{

    }

</style>