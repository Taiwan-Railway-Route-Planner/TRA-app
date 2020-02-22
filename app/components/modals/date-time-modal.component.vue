<template>


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
    @import "../../theme/generalStyles.scss";
    @import "../../theme/_variables.scss";



</style>
