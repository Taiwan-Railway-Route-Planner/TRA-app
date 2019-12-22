<template>
    <DockLayout :class="[smallerLabels, 'modal']">
        <FlexboxLayout dock="bottom" class="confirmOrDiscard">
            <Label class="btn discardBtn" @tap="discard" :text="$props.time.modal.bottom.leftBtn"></Label>
            <Label class="btn confirmBtn" @tap="confirm" :text="$props.time.modal.bottom.rightBtn"></Label>
        </FlexboxLayout>
        <FlexboxLayout dock="center" class="center">
            <DatePicker v-model="$props.timeModal.selectedDate" :minDate="$props.timeModal.minDate"></DatePicker>
        </FlexboxLayout>
    </DockLayout>
</template>

<script>

    import moment from "moment"

    export default {
        props: ['time', 'timeModal', 'formatTimeStampBasedOnLanguage'],
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
        methods: {
            discard: function () {
                this.$modal.close();
            },
            confirm: function () {
                this.$props.time.modal.center.date.today = moment(this.$props.timeModal.selectedDate).format();
                this.$props.time.modal.center.date.actual = this.$props.formatTimeStampBasedOnLanguage.formatTimeStampForModel(this, this.$props.time.modal.center.date.today);
                this.$modal.close();
            }
        }
    }
</script>

<style scoped>

    .modal {
        background-color: white;
        height: 350;
        /*Android*/
        width: 280;
        /*iOS*/
        /*width: 300;*/
        text-align: left;
        color: #000;
    }

    .center{
        justify-content: center;
    }

    /****** GENERATE FROM COMPUTED smallerLabels() ******/

    .smallerLabels.modal Label{
        font-size: 14;
    }

</style>
