<template>
    <Flexboxlayout :class="[smallerLabels, 'center']">
            <DatePicker :minDate="minDate" :maxDate="maxDate" v-model="currentDate" @dateChange="changeDate"/>
    </Flexboxlayout>
</template>

<script>

    export default {
        computed: {
            smallerLabels() {
                switch (this.$store.state.language) {
                    case 'RU':
                        return 'smallerLabels';
                    default:
                        return '';
                }
            }
        },
        data () {
            return {
                minDate: new Date(2019, 6, 13),
                maxDate: new Date(2021, 1, 31),
                currentDate: new Date()
            }
        },
        methods: {
            changeDate: function () {
                this.$emit('updateDate', this.currentDate)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../theme/generalStyles.scss";
    @import "../../theme/_variables.scss";

    .center{
        justify-content: center;
    }

    /****** GENERATE FROM COMPUTED smallerLabels() ******/

    .smallerLabels.center Label{
        font-size: 14;
    }

</style>
