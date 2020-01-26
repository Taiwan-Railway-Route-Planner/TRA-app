<template>
    <DockLayout :class="[smallerLabels, 'modal']">
        <FlexboxLayout dock="bottom" class="confirmOrDiscard">
            <Label class="btn discardBtn" @tap="discard" :text="$props.time.modal.bottom.leftBtn"/>
            <Label class="btn confirmBtn" @tap="confirm" :text="$props.time.modal.bottom.rightBtn"/>
        </FlexboxLayout>
        <FlexboxLayout dock="center" class="center">
            <DatePicker v-model="date" :minDate="minDate"/>
        </FlexboxLayout>
    </DockLayout>
</template>

<script>

    import moment from "moment"

    export default {
        props: ['time', 'formatTimeStampBasedOnLanguage'],
        created: function () {
            this.date = moment(this.$props.time.modal.center.date.today).toDate();
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
        data () {
            return {
                date: this.$props.selectedDate,
                minDate: '06-13-2019',
                maxDate: '01-01-2020',
            }
        },
        methods: {
            discard: function () {
                this.$emit('changeModal')
            },
            confirm: function () {
                this.$props.time.modal.center.date.today = moment(this.date).format();
                this.$props.time.modal.center.date.actual = this.$props.formatTimeStampBasedOnLanguage.formatTimeStampForModel(this, this.$props.time.modal.center.date.today);
                this.time.date.show = this.$props.formatTimeStampBasedOnLanguage.formatTimeStampForShowingSelect(this, this.$props.time.modal.center.date.today);
                this.time.date.real = moment(this.$props.time.modal.center.date.today).locale('en').format('YYYYMMDD');
                this.$emit('changeModal');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/generalStyles.scss";
    @import "../../styles/_variables.scss";

    /**** modal ****/

    .modal {
        background-color: $white;
        height: 400;
        width: 300;
        text-align: left;
        color: $dark;
    }

    /**** modal > Center ****/

    .modal {
        .center{
            justify-content: center;
        }
    }

    /****** GENERATE FROM COMPUTED smallerLabels() ******/

    .smallerLabels.modal Label{
        font-size: 14;
    }

</style>
