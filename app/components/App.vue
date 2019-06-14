<template>
    <Page actionBarHidden="true">
        <DockLayout>
            <FlexboxLayout dock="top" class="menu-top-title">
                <Label text="Taiwan rail"></Label>
            </FlexboxLayout>
            <FlexboxLayout dock="center" class="menu-center">
                <FlexboxLayout class="menu-center-title">
                    <Label text="Choose your language"></Label>
                    <Label text="選擇"></Label>
                </FlexboxLayout>
                <FlexboxLayout class="menu-center-image">
                    <FlexboxLayout @tap="navigateTo('ZH')">
                        <Image src="~/assets/images/taiwan.png" stretch="none"></Image>
                    </FlexboxLayout>
                    <FlexboxLayout @tap="navigateTo('EN')">
                        <Image src="~/assets/images/english.png" stretch="none"></Image>
                    </FlexboxLayout>
                </FlexboxLayout>
            </FlexboxLayout>
        </DockLayout>
    </Page>
</template>

<script>
    import enStationSelect from "./Select/enStationSelect"
    import zhStationSelect from "./Select/zhStationSelect"

    export default {
        created() {
            console.log(this.$store.state.language);
            switch (this.$store.state.language) {
                case null:
                    console.log("Navigate to nowhere");
                    break;
                case "ZH":
                    console.log("Navigate to station zh");
                    this.$navigateTo(zhStationSelect);
                    break;
                case "EN":
                    console.log("Navigate to station eng");
                    this.$navigateTo(enStationSelect);
                    console.log("I can't be logged");
                    break;
            }
        },
        data() {
            return {}
        },
        methods: {
            navigateTo: function (language) {
                this.$store.commit('updateLanguage',language);
                if (language === 'ZH'){
                    this.$navigateTo(zhStationSelect);
                } else {
                    this.$navigateTo(enStationSelect);
                }
            }
        }
    }
</script>

<style scoped>

    .menu-top-title{
        height: 20%;
        display: flex;
        justify-content: center;
        padding-top: 30%;
        flex-direction: row;
        font-size: 30;
    }

    .menu-center{
        display: flex;
        flex-direction: column;
        height: 80%;
    }

    .menu-center-title{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 20;
    }

    .menu-center-title Label{
        padding-top: 5%;
    }

    .menu-center-image{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 70%;
    }

</style>
