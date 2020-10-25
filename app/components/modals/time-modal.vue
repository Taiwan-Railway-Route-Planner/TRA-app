<template>
    <flexboxlayout :class="[smallerLabels, 'timeSettings']">
        <FlexboxLayout class="timeSelect">
          <TimePicker v-model="timeWeSelected" iosPreferredDatePickerStyle="1"></TimePicker>
            <FlexboxLayout class="now">
                <Button class="btn btn-sq btn-wt" @tap="setTimeToNow" :text="$props.time.modal.center.button"/>
            </FlexboxLayout>
        </FlexboxLayout>
    </flexboxlayout>
</template>

<script>

    import moment from "moment"

    export default {
        props: ['time'],
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
                timeWeSelected: ''
            }
        },
        methods: {
            setTimeToNow: function () {
                console.log('set back to default');
                this.timeWeSelected = moment().toDate();
            },
            updateTime: function () {
                console.log('time change');
                this.$emit('updateTime', this.timeWeSelected);
            }
        },
        watch: {
            timeWeSelected: function () {
                this.updateTime();
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

                    .ns-dark & {
                        border-color: $white;
                        border-style: solid;
                        border-width: 2px;
                    }
                }
            }
        }
    }

</style>
