<template>
    <Page actionBarHidden="true">
        <DockLayout class="page">
            <FlexboxLayout dock="top" class="mainMenu">
                <Label class="title" text="TRA Route Planner"></Label>
            </FlexboxLayout>
            <FlexboxLayout dock="bottom" class="menu-bottom">
                <Button v-show="selected" class="btn" :text="data.confirm" @tap="confirm"></Button>
            </FlexboxLayout>
            <FlexboxLayout dock="center" class="menu-center" separatorColor="#1a0dab">
                <ListView for="(item, index) in languages" ref="listview" class="listView" @itemTap="onItemTap" @itemLoading="onItemLoading">
                    <v-template>
                        <FlexboxLayout class="element">
                            <Label class="top-text" :text="item.nameNative"></Label>
                        </FlexboxLayout>
                    </v-template>
                </ListView>
            </FlexboxLayout>
        </DockLayout>
    </Page>
</template>

<script>

    import handle from "../assets/js/Vue/BootUp/handle"

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
                const cell = args.ios;
                if (cell) {
                    cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
                }
            }
        }
    }
</script>

<style scoped>

    .page{
        background-color: #1a0dab;
        color: #ffffff;
    }

    .mainMenu {
        flex-direction: row;
        justify-content: center;
        margin-bottom: 10%;
    }

    .title {
        font-size: 25;
        color: #ffffff;
        margin-top: 5%;
    }

    .menu-center{
        flex-direction: column;
    }

    .menu-center .listView{
        background-color: #1a0dab;
    }

    .menu-center .element{
        padding-top: 20%;
        flex-direction: column;
        align-items: center;
        background-color: #1a0dab;
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
        background-color: #ffffff;
        color: #1a0dab;
        margin-bottom: 3%;
    }

</style>
