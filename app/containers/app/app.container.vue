<template>
    <Page actionBarHidden="true">
        <DockLayout class="page">
            <FlexboxLayout dock="top" class="mainMenu">
                <Label class="title" text="TRA Route Planner"/>
            </FlexboxLayout>
            <FlexboxLayout dock="bottom" class="menu-bottom">
                <Button v-show="selected" class="btn" :text="data.confirm" @tap="confirm"/>
            </FlexboxLayout>
            <FlexboxLayout dock="center" class="menu-center" separatorColor="#1a0dab">
                <ListView for="(item, index) in languages" ref="listview" class="listView" @itemTap="onItemTap" @itemLoading="onItemLoading">
                    <v-template>
                        <FlexboxLayout class="element">
                            <Label class="top-text" :text="item.nameNative"/>
                        </FlexboxLayout>
                    </v-template>
                </ListView>
            </FlexboxLayout>
        </DockLayout>
    </Page>
</template>

<script>

    import handle from "../../assets/js/Vue/BootUp/handle";
    import { isIOS } from "tns-core-modules/platform";

    export default {
        created() {
            handle.handle(this);
        },
        data() {
            return {
                languages: null,
                data: {
                    confirm: ""
                },
                selected: false,
                saveAbbr: null
            }
        },
        methods: {
            onItemTap: function (event) {
                handle.loadSelectedLanguage(this, event.item.abbr);
            },
            confirm: function () {
                this.$store.commit('updateLanguage', this.saveAbbr);
                this.$goto("Select");
            },
            onItemLoading: function(args) {
                if (isIOS){
                    const cell = args.ios;
                    if (cell) {
                        cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../theme/variables";
    @import "../../theme/generalStyles";

    .page {
        background-color: $primary;
        color: $white;

        .ns-dark & {
            background-color: $dark-primary;
            color: $dark-white;
        }
    }

    .mainMenu {
        flex-direction: row;
        justify-content: center;
        margin-bottom: 10%;
    }

    .title {
        font-size: 25;
        color: $white;
        margin-top: 5%;
    }

    .menu-center{
        flex-direction: column;
    }

    .menu-center .listView{
        background-color: $primary;

        .ns-dark &{
            background-color: $dark-primary;
        }
    }

    .menu-center .element{
        padding-top: 20%;
        flex-direction: column;
        align-items: center;
        background-color: $primary;

        .ns-dark &{
            background-color: $dark-primary;
        }
    }

    .menu-center .element .top-text{
        font-size: 20;
    }

    .menu-bottom{
        justify-content: center;
    }

    .menu-bottom .btn{
        height: 10%;
        width: 80%;
        background-color: $white;
        color: $primary;
        margin-bottom: 3%;
    }

</style>
