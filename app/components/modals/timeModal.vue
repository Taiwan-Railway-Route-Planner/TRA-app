<template>
    <DockLayout class="modal">
        <FlexboxLayout dock="top" class="departureOrArrival">
            <FlexboxLayout class="smaller-departureOrArrival">
                <Label :text="$props.time.modal.top.first" class="topLabel active" @tap=""></Label>
                <Label :text="$props.time.modal.top.second" class="topLabel" @tap=""></Label>
            </FlexboxLayout>
        </FlexboxLayout>
        <FlexboxLayout dock="bottom" class="confirmOrDiscard">
            <Label class="btn discardBtn" @tap="discard" :text="$props.time.modal.bottom.leftBtn"></Label>
            <Label class="btn confirmBtn" @tap="confirm" :text="$props.time.modal.bottom.rightBtn"></Label>
        </FlexboxLayout>
        <FlexboxLayout dock="center" class="timeSettings">
            <FlexboxLayout class="timeSelect">
                <TimePicker :hour="selectedTime.hour" :minute="selectedTime.minute" @timeChange="timeChange"></TimePicker>
                <FlexboxLayout class="now">
                    <Button class="btn btn-sq btn-wt" @tap="setTimeToNow" :text="$props.time.modal.center.button"></Button>
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout class="dateTimeSelect">
                <FlexboxLayout class="dateTimeNav">
                    <Label class="fas" @tap="previousDay" :text="'\uf053' | unescape"></Label>
                    <FlexboxLayout class="timeStamp">
                        <Label class="" @tap="modalCalender" :text="$props.time.modal.center.date.actual"></Label>
                    </FlexboxLayout>
                    <Label class="fas" @tap="nextDay" :text="'\uf054' | unescape"></Label>
                </FlexboxLayout>
                <FlexboxLayout class="calenderView">
                    <Button class="btn btn-sq btn-wt far" @tap="modalCalender" :text="'\uf073' | unescape"></Button>
                </FlexboxLayout>
            </FlexboxLayout>
        </FlexboxLayout>
    </DockLayout>
</template>

<script>

    import dateModal from "./dateModal"
    import handle from "../../assets/js/Vue/Modal/timeModal/handle"
    import moment from "moment"

    export default {
        props: ['time'],
        created: function () {
            handle.handle(this);
        },
        data() {
            return {
                selectedDate: '',
                selectedTime: {
                    hour: '12',
                    minute: '25'
                },
                minDate: '01-01-2019',
                maxDate: '01-01-2020',
                departureTimeOrArrivalTime: true
            }
        },
        methods: {
            timeChange: function () {
                console.log('this.selectedTime', JSON.stringify(this.selectedTime));
            },
            setTimeToNow: function () {
                console.log(moment().format('h'), moment().format('mm'));
                this.selectedTime.hour = moment().format('h');
                this.selectedTime.minute = moment().format('mm');
                console.log("huuuh???");
            },
            previousDay: function () {
                this.$props.time.modal.center.date.actual = moment(this.$props.time.modal.center.date.today).subtract(1, 'days').format('llll').replace(/\d\d:\d\d/i, '').replace('一', '');
                this.$props.time.modal.center.date.today = moment(this.$props.time.modal.center.date.today).subtract(1, 'days');
                console.log(this.$props.time.modal.center.date.today)
            },
            nextDay: function () {
                this.$props.time.modal.center.date.actual = moment(this.$props.time.modal.center.date.today).add(1, 'days').format('llll').replace(/\d\d:\d\d/i, '').replace('一', '');
                this.$props.time.modal.center.date.today = moment(this.$props.time.modal.center.date.today).add(1, 'days');
                console.log(this.$props.time.modal.center.date.today)
            },
            modalCalender: function () {
                this.selectedDate = moment(this.time.modal.center.date.today).format('L');
                this.$showModal(dateModal, {
                        props: {
                            time: this.$props.time,
                            timeModal: {
                                selectedDate: this.selectedDate,
                                minDate: this.minDate,
                                maxDate: this.maxDate
                            }
                        }
                    }
                );
            },
            discard: function () {
                handle.discard(this);
                this.$modal.close();
            },
            confirm: function () {
                handle.save(this);
                this.$modal.close();
            }
        }
    }
</script>

<style scoped>

    .modal {
        backgroud-color: white;
        height: 400;
        width: 300;
        text-align: left;
        color: #000;
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
        color: #1a0dab;
    }

    .timeSettings .dateTimeSelect .dateTimeNav .timeStamp {
        flex-direction: column;
        align-self: center;
    }

    .timeSettings .dateTimeSelect .calenderView {
        width: 20%;
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
        border-bottom-color: #D3D3D3;
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
        border-bottom-color: #1a0dab;
        border-bottom-style: solid;
    }

</style>