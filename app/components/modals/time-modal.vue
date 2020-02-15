<template>
    <DockLayout :class="[smallerLabels, 'modal']">
        <FlexboxLayout dock="top" class="departureOrArrival">
            <FlexboxLayout class="smaller-departureOrArrival">
                <Label :text="$props.time.modal.top.first" class="topLabel active" @tap=""/>
                <!--<Label :text="$props.time.modal.top.second" class="topLabel" @tap=""/>-->
            </FlexboxLayout>
        </FlexboxLayout>
        <FlexboxLayout dock="bottom" class="confirmOrDiscard">
            <Label class="btn discardBtn" @tap="discard" :text="$props.time.modal.bottom.leftBtn"/>
            <Label class="btn confirmBtn" @tap="confirm" :text="$props.time.modal.bottom.rightBtn"/>
        </FlexboxLayout>
        <FlexboxLayout dock="center" class="timeSettings">
            <FlexboxLayout class="timeSelect">
                <TimePicker v-model="timeWeSelected"/>
                <FlexboxLayout class="now">
                    <Button class="btn btn-sq btn-wt" @tap="setTimeToNow" :text="$props.time.modal.center.button"/>
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout class="dateTimeSelect">
                <FlexboxLayout class="dateTimeNav">
                    <Label class="fas" @tap="previousDay" :text="'\uf053' | unescape"/>
                    <FlexboxLayout class="timeStamp">
                        <Label class="" @tap="modalCalender" :text="$props.time.modal.center.date.actual"/>
                    </FlexboxLayout>
                    <Label class="fas" @tap="nextDay" :text="'\uf054' | unescape"/>
                </FlexboxLayout>
                <FlexboxLayout class="calenderView">
                    <Button class="btn btn-sq btn-wt far" @tap="modalCalender" :text="'\uf073' | unescape"/>
                </FlexboxLayout>
            </FlexboxLayout>
        </FlexboxLayout>
    </DockLayout>
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

    .modal {
        background-color: $white;
        height: 400;
        width: 300;
        text-align: left;
        color: $dark;
    }

    /****** GENERATE FROM COMPUTED smallerLabels() ******/

    .smallerLabels.modal Label,
    .smallerLabels.modal .departureOrArrival .smaller-departureOrArrival .topLabel {
        font-size: 14;
    }

    .smallerLabels.modal .timeSettings .timeSelect .now Button {
        font-size: 12;
    }

    .timeSettings {
        flex-direction: column;
        width: 100%;
        height: 60%;
    }

    .timeSettings .timeSelect {
        flex-direction: row;
        align-self: center;
        margin-bottom: -20;
        padding-top: -20;
    }

    .timeSettings .timeSelect TimePicker {
        width: 80%;
    }

    .timeSettings .timeSelect .now {
        flex-direction: column;
        align-self: center;
        width: 20%;
    }

    .timeSettings .timeSelect .now Button {
        /*iOS*/
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }

    .timeSettings .dateTimeSelect {
        flex-direction: row;
        width: 100%;
        align-items: center;
        margin-left: 10;
    }

    .timeSettings .dateTimeSelect .dateTimeNav {
        flex-direction: row;
        justify-content: space-between;
        width: 80%;
    }

    .timeSettings .dateTimeSelect .dateTimeNav .fas {
        color: $primary;
    }

    .timeSettings .dateTimeSelect .dateTimeNav .timeStamp {
        flex-direction: column;
        align-self: center;
    }

    .timeSettings .dateTimeSelect .calenderView {
        /*Android*/
        /*width: 20%;*/
        /*iOS*/
        width: 30%;
        height: 100px;
    }

    .timeSettings .dateTimeSelect .calenderView .far {
        font-size: 20;
    }

    .departureOrArrival {
        flex-direction: row;
        width: 100%;
        justify-content: center;
    }

    .departureOrArrival .smaller-departureOrArrival {
        width: 80%;
        border-bottom-width: 3px;
        border-bottom-color: $white;
        border-bottom-style: solid;
        text-align: center;
    }

    .departureOrArrival .smaller-departureOrArrival .topLabel {
        width: 50%;
        font-size: 18;
        padding-top: 15;
        padding-bottom: 15;
    }

    .departureOrArrival .smaller-departureOrArrival .active {
        border-bottom-width: 6px;
        border-bottom-color: $primary;
        border-bottom-style: solid;
    }

</style>
