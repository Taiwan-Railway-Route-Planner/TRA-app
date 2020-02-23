<template>
    <flexboxlayout :class="[smallerLabels, 'timeSettings']">
        <FlexboxLayout class="timeSelect">
            <TimePicker v-model="timeWeSelected" @timeChange="updateTime"/>
            <FlexboxLayout class="now">
                <Button class="btn btn-sq btn-wt" @tap="setTimeToNow" :text="$props.time.modal.center.button"/>
            </FlexboxLayout>
        </FlexboxLayout>
    </flexboxlayout>
</template>

<script>

    import moment from "moment"

    export default {
        props: ['time', 'selectedTime'],
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
        data() {
            return {
                timeWeSelected: this.$props.selectedTime
            }
        },
        methods: {
            setTimeToNow: function () {
                this.timeWeSelected = moment().toDate();
            },
            updateTime: function () {
                this.$emit('updateTime', this.timeWeSelected);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../theme/generalStyles.scss";
    @import "../../theme/_variables.scss";

    .timeSettings {
        flex-direction: column;
        width: 100%;

        &.smallerLabels {
            .now Button {
                font-size: 12;
            }
        }

        .timeSelect {
            flex-direction: row;
            align-self: center;
            margin-bottom: -20;
            padding-top: -20;

            TimePicker {
                width: 70%;
            }

            .now {
                flex-direction: column;
                align-self: center;
                width: 30%;

                Button {
                    /*iOS*/
                    width: 80%;
                    margin-left: auto;
                    margin-right: auto;
                }
            }
        }
    }

</style>
