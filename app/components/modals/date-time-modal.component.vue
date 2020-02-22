<template>
    <DockLayout :class="[smallerLabels, 'modal']">
        <FlexboxLayout dock="top" class="departureOrArrivalWrapper">
            <FlexboxLayout class="smaller-departureOrArrivalTitle">
                <Label :text="$props.time.modal.top.first" class="title active" @tap=""/>
            </FlexboxLayout>
        </FlexboxLayout>
        <FlexboxLayout dock="bottom" class="confirmOrDiscard">
            <Label class="btn discardBtn" @tap="close" :text="$props.time.modal.bottom.leftBtn"/>
            <Label class="btn confirmBtn" @tap="confirm" :text="$props.time.modal.bottom.rightBtn"/>
        </FlexboxLayout>
        <FlexboxLayout dock="center" class="timeDateDetails">
            <time-modal :selected-time="selectedTime" :time="$props.time"/>
            <date-modal :time="$props.time"/>/>
        </FlexboxLayout>
    </DockLayout>
</template>

<script>

    import DateModal from "./date-modal";
    import TimeModal from "./time-modal";
    import handle from "../../assets/js/Vue/Modal/handle"

    export default {
        props: ['time', 'formatTimeStampBasedOnLanguage'],
        components: {
            TimeModal,
            DateModal
        },
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
        created: function () {
            handle.init(this);
        },
        data() {
            return {
                selectedTime: '',
                showTimeModal: true
            }
        },
        methods: {
            changeModalReturnTime: function (returnTimeStamp) {
                this.selectedTime = returnTimeStamp;
            },
            close: function () {
                this.$modal.close();
            },
            confirm: function () {
                this.handle.save();
                this.close();
            }
        }
    }

</script>

<style lang="scss" scoped>
    @import "../../theme/generalStyles.scss";
    @import "../../theme/_variables.scss";

    .modal {
        background-color: $white;
        color: $dark;

        .ns-dark & {
            background-color: $dark-dark;
            color: $dark-white
        }

        .departureOrArrivalWrapper {
            flex-direction: row;
            width: 100%;
            justify-content: center;

            .smaller-departureOrArrivalTitle {
                width: 80%;
                border-bottom-width: 3px;
                border-bottom-color: $white;
                border-bottom-style: solid;
                text-align: center;

                .title {
                    width: 50%;
                    font-size: 18;
                    padding-top: 15;
                    padding-bottom: 15;

                    &.active {
                        border-bottom-width: 6px;
                        border-bottom-color: $primary;
                        border-bottom-style: solid;
                    }
                }
            }
        }

        .timeDateDetails {
            flex-direction: column;
            justify-content: center;
        }
    }

    /****** GENERATE FROM COMPUTED smallerLabels() ******/

    .smallerLabels.modal Label,
    .smallerLabels.modal .departureOrArrivalWrapper .smaller-departureOrArrivalTitle .title {
        font-size: 14;
    }

    .smallerLabels.modal .timeSettings .timeSelect .now Button {
        font-size: 12;
    }

</style>
