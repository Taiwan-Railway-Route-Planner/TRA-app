<template>
    <Page actionbarhidden="true">
        <enRoute v-if="$store.state.language === 'EN'"></enRoute>
        <zhRoute v-else></zhRoute>
    </Page>
</template>

<script>
    import enRoute from "./enRoute"
    import zhRoute from "./zhRoute"

    export default {
        components: {enRoute, zhRoute}
    }
</script>

<style scoped>

</style>