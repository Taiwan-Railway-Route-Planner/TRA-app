<template>
    <flexboxlayout :class="[smallerLabels, 'timeSettings']">
        <FlexboxLayout class="timeSelect">
            <TimePicker v-model="timeWeSelected"/>
            <FlexboxLayout class="now">
                <Button class="btn btn-sq btn-wt" @tap="setTimeToNow" :text="$props.time.modal.center.button"/>
            </FlexboxLayout>
        </FlexboxLayout>
    </flexboxlayout>
</template>

<script>

    import handle from "../../assets/js/Vue/Modal/timeModal/handle"
    import moment from "moment"

    export default {
        props: ['time', 'formatTimeStampBasedOnLanguage', 'selectedTime'],
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
            previousDay: function () {
                this.$props.time.modal.center.date.actual = this.$props.formatTimeStampBasedOnLanguage.formatTimeStampForModel(this, moment(this.$props.time.modal.center.date.today).subtract(1, 'days'));
                this.$props.time.modal.center.date.today = moment(this.$props.time.modal.center.date.today).subtract(1, 'days');
            },
            nextDay: function () {
                this.$props.time.modal.center.date.actual = this.$props.formatTimeStampBasedOnLanguage.formatTimeStampForModel(this, moment(this.$props.time.modal.center.date.today).add(1, 'days'));
                this.$props.time.modal.center.date.today = moment(this.$props.time.modal.center.date.today).add(1, 'days');
            },
            modalCalender: function () {
                this.$emit('changeModalReturnTime', this.timeWeSelected);
            },
            discard: function () {
                handle.discard(this);
                this.$emit('close');
            },
            confirm: function () {
                handle.save(this);
                this.$emit('close');
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
