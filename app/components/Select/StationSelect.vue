<template>
    <Page actionbarhidden="true">
        <en-station-select v-if="$store.state.language === 'EN'"></en-station-select>
        <zh-station-select v-else></zh-station-select>
    </Page>
</template>

<script>
    import enStationSelect from "./enStationSelect"
    import zhStationSelect from "/zhStationSelect"

    export default {
        components: {zhStationSelect, enStationSelect}
    }
</script>

<style scoped>

</style>