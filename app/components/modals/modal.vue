<template>
    <flexboxlayout>
        <time-modal v-if="showTimeModal"
                    @changeModalReturnTime="changeModalReturnTime"
                    @close="close"
                    :selected-time="selectedTime"
                    :time="$props.time" :format-time-stamp-based-on-language="$props.formatTimeStampBasedOnLanguage"/>
        <date-modal v-else
                    @changeModal="changeModal"
                    :time="$props.time" :format-time-stamp-based-on-language="$props.formatTimeStampBasedOnLanguage"/>
    </flexboxlayout>
</template>


<script>

    import DateModal from "./dateModal";
    import TimeModal from "./timeModal";
    import handle from "../../assets/js/Vue/Modal/handle"

    export default {
        props: ['time', 'formatTimeStampBasedOnLanguage'],
        components: {
            TimeModal,
            DateModal
        },
        created: function () {
           handle.init(this);
        },
        data () {
            return {
                selectedTime: '',
                showTimeModal: true
            }
        },
        methods: {
            changeModalReturnTime: function (returnTimeStamp) {
                this.selectedTime = returnTimeStamp;
                this.changeModal();
            },
            changeModal: function () {
                this.showTimeModal = !this.showTimeModal;
            },
            close: function () {
                this.$modal.close();
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
