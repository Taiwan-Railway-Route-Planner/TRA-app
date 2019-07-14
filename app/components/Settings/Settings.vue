<template>
    <Page actionBarHidden="true">
        <DockLayout>
            <FlexboxLayout dock="top" class="dock-top">
                <FlexboxLayout class="top">
                    <FlexboxLayout class="top-title">
                        <Label :text="data.top.first + ':'"></Label>
                        <Label :text="data.top.second + ':'"></Label>
                    </FlexboxLayout>
                    <FlexboxLayout v-if="$store.state.language === 'ZH'" class="top-data">
                        <Label :text="$props.routeDetails.departure.details.站名"></Label>
                        <Label :text="$props.routeDetails.arrival.details.站名"></Label>
                    </FlexboxLayout>
                    <FlexboxLayout v-else class="top-data">
                        <Label :text="$props.routeDetails.departure.details.eng站名"></Label>
                        <Label :text="$props.routeDetails.arrival.details.eng站名"></Label>
                    </FlexboxLayout>
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
        </DockLayout>
    </Page>
</template>

<script>

    export default {

    }

</script>

<style scoped>

</style>