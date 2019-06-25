<template>
    <DockLayout class="modal">
        <FlexboxLayout dock="bottom" class="confirmOrDiscard">
            <Label class="btn discardBtn" @tap="discard" :text="$props.time.modal.bottom.leftBtn"></Label>
            <Label class="btn confirmBtn" @tap="confirm" :text="$props.time.modal.bottom.rightBtn"></Label>
        </FlexboxLayout>
        <FlexboxLayout dock="center">
            <DatePicker v-model="$props.timeModal.selectedDate" :minDate="$props.timeModal.minDate"></DatePicker>

        </FlexboxLayout>

    </DockLayout>
</template>

<script>
    
    import moment from "moment"
    
    export default {
        props: ['time', 'timeModal'],
        methods: {
            discard: function () {
                this.$modal.close();
            },
            confirm: function () {
                this.$props.time.modal.center.date.actual = moment(this.$props.timeModal.selectedDate).format('llll').replace(moment().format('LT'), '').replace('一', '').replace('00:00', '');
                this.$modal.close();
            }
        }
    }
</script>

<style scoped>

    .modal {
        backgroud-color: white;
        height: 350;
        width: 250;
        text-align: left;
        color: #000;
    }



</style>