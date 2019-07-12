<template>
    <Page actionBarHidden="true">
        <DockLayout>
            <FlexboxLayout dock="top" class="dock-top">
                <FlexboxLayout class="top">
                    <FlexboxLayout class="top-title">
                        <Label class="fas" :text="'\uf104' | unescape"></Label>
                    </FlexboxLayout>
<!--                    <FlexboxLayout class="top-title">-->
<!--                        <Label :text="$props.language.top.first + ':'"></Label>-->
<!--                        <Label :text="$props.language.top.second + ':'"></Label>-->
<!--                    </FlexboxLayout>-->
<!--                    <FlexboxLayout v-if="$store.state.language === 'EN'" class="top-data">-->
<!--                        <Label :text="$props.routeDetails.arrival.details.eng站名"></Label>-->
<!--                        <Label :text="$props.routeDetails.arrival.details.eng站名"></Label>-->
<!--                    </FlexboxLayout>-->
<!--                    <FlexboxLayout v-else class="top-data">-->
<!--                        <Label :text="$props.routeDetails.arrival.details.站名"></Label>-->
<!--                        <Label :text="$props.routeDetails.arrival.details.站名"></Label>-->
<!--                    </FlexboxLayout>-->
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout dock="center" class="center">

            </FlexboxLayout>
        </DockLayout>
    </Page>
</template>

<script>

    export default {
        props: ['routeDetails', 'selectTravelDetails', 'language'],
        data() {
            return {

            }
        },
        methods: {

        }
    }

</script>

<style scoped>

    .dock-top {
        background-color: #1a0dab;
        color: #fff;
        height: 30%;
    }

    .dock-top .top{
        margin-left: 5%;
    }

    .dock-top .top .top-title{

    }

</style>