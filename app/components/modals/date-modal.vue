<template>
    <Flexboxlayout :class="[smallerLabels, 'center']">
<!--        <FlexboxLayout dock="bottom" class="confirmOrDiscard">-->
<!--            <Label class="btn discardBtn" @tap="discard" :text="$props.time.modal.bottom.leftBtn"/>-->
<!--            <Label class="btn confirmBtn" @tap="confirm" :text="$props.time.modal.bottom.rightBtn"/>-->
<!--        </FlexboxLayout>-->
<!--        <FlexboxLayout dock="center" class="center">-->
<!--        <FlexboxLayout class="center">-->
            <DatePicker :minDate="minDate" :maxDate="maxDate"/>
<!--        </FlexboxLayout>-->
<!--        </FlexboxLayout>-->
    </Flexboxlayout>
</template>

<script>

    import moment from "moment"

    export default {
        props: ['time', 'formatTimeStampBasedOnLanguage'],
        created: function () {
            this.date = moment(this.$props.time.modal.center.date.today).toDate();
            console.log('this.date', this.date);
            console.log(new Date());
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
                date: '',
                minDate: new Date(2019, 6, 13),
                maxDate: new Date(2021, 1, 31),
                currentDate: new Date()
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
                console.log(this.time.data.real);
                this.$emit('changeModal');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../theme/generalStyles.scss";
    @import "../../theme/_variables.scss";

    .modal {
        background-color: $white;
        text-align: left;
        color: $dark;
    }

    .center{
        justify-content: center;
    }

    /****** GENERATE FROM COMPUTED smallerLabels() ******/

    .smallerLabels.modal Label{
        font-size: 14;
    }

</style>
