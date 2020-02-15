<template>
    <ScrollView class="county" orientation="horizontal" scrollBarIndicatorVisible="false" ref="countiesList">
        <StackLayout orientation="horizontal">
            <Label class="filled" v-if="$store.state.language === 'ZH'" v-show="hideThis" :text="selectedCounty.name.縣市"/>
            <Label class="filled" v-else v-show="hideThis" :text="selectedCounty.name.eng縣市"/>
            <Label ref="all" @tap="setNewFilter" link="all" class="fas filled" :text="'\uf57e' | unescape"/>
            <StackLayout v-if="$store.state.language === 'ZH'" orientation="horizontal">
                <Label ref="0" @tap="setNewFilter" link="0" :text="data.stationInfo.counties[0].縣市"/>
                <Label ref="1" @tap="setNewFilter" link="1" :text="data.stationInfo.counties[1].縣市"/>
                <Label ref="2" @tap="setNewFilter" link="2" :text="data.stationInfo.counties[2].縣市"/>
                <Label ref="3" @tap="setNewFilter" link="3" :text="data.stationInfo.counties[3].縣市"/>
                <Label ref="4" @tap="setNewFilter" link="4" :text="data.stationInfo.counties[4].縣市"/>
                <Label ref="5" @tap="setNewFilter" link="5" :text="data.stationInfo.counties[5].縣市"/>
                <Label ref="6" @tap="setNewFilter" link="6" :text="data.stationInfo.counties[6].縣市"/>
                <Label ref="7" @tap="setNewFilter" link="7" :text="data.stationInfo.counties[7].縣市"/>
                <Label ref="8" @tap="setNewFilter" link="8" :text="data.stationInfo.counties[8].縣市"/>
                <Label ref="9" @tap="setNewFilter" link="9" :text="data.stationInfo.counties[9].縣市"/>
                <Label ref="10" @tap="setNewFilter" link="10" :text="data.stationInfo.counties[10].縣市"/>
                <Label ref="11" @tap="setNewFilter" link="11" :text="data.stationInfo.counties[11].縣市"/>
                <Label ref="12" @tap="setNewFilter" link="12" :text="data.stationInfo.counties[12].縣市"/>
                <Label ref="13" @tap="setNewFilter" link="13" :text="data.stationInfo.counties[13].縣市"/>
                <Label ref="14" @tap="setNewFilter" link="14" :text="data.stationInfo.counties[14].縣市"/>
                <Label ref="15" @tap="setNewFilter" link="15" :text="data.stationInfo.counties[15].縣市"/>
                <Label ref="16" @tap="setNewFilter" link="16" :text="data.stationInfo.counties[16].縣市"/>
                <Label ref="17" @tap="setNewFilter" link="17" :text="data.stationInfo.counties[17].縣市"/>
                <Label ref="18" @tap="setNewFilter" link="18" :text="data.stationInfo.counties[18].縣市"/>
            </StackLayout>
            <StackLayout v-else orientation="horizontal">
                <Label ref="0" @tap="setNewFilter" link="0" :text="data.stationInfo.counties[0].eng縣市"/>
                <Label ref="1" @tap="setNewFilter" link="1" :text="data.stationInfo.counties[1].eng縣市"/>
                <Label ref="2" @tap="setNewFilter" link="2" :text="data.stationInfo.counties[2].eng縣市"/>
                <Label ref="3" @tap="setNewFilter" link="3" :text="data.stationInfo.counties[3].eng縣市"/>
                <Label ref="4" @tap="setNewFilter" link="4" :text="data.stationInfo.counties[4].eng縣市"/>
                <Label ref="5" @tap="setNewFilter" link="5" :text="data.stationInfo.counties[5].eng縣市"/>
                <Label ref="6" @tap="setNewFilter" link="6" :text="data.stationInfo.counties[6].eng縣市"/>
                <Label ref="7" @tap="setNewFilter" link="7" :text="data.stationInfo.counties[7].eng縣市"/>
                <Label ref="8" @tap="setNewFilter" link="8" :text="data.stationInfo.counties[8].eng縣市"/>
                <Label ref="9" @tap="setNewFilter" link="9" :text="data.stationInfo.counties[9].eng縣市"/>
                <Label ref="10" @tap="setNewFilter" link="10" :text="data.stationInfo.counties[10].eng縣市"/>
                <Label ref="11" @tap="setNewFilter" link="11" :text="data.stationInfo.counties[11].eng縣市"/>
                <Label ref="12" @tap="setNewFilter" link="12" :text="data.stationInfo.counties[12].eng縣市"/>
                <Label ref="13" @tap="setNewFilter" link="13" :text="data.stationInfo.counties[13].eng縣市"/>
                <Label ref="14" @tap="setNewFilter" link="14" :text="data.stationInfo.counties[14].eng縣市"/>
                <Label ref="15" @tap="setNewFilter" link="15" :text="data.stationInfo.counties[15].eng縣市"/>
                <Label ref="16" @tap="setNewFilter" link="16" :text="data.stationInfo.counties[16].eng縣市"/>
                <Label ref="17" @tap="setNewFilter" link="17" :text="data.stationInfo.counties[17].eng縣市"/>
                <Label ref="18" @tap="setNewFilter" link="18" :text="data.stationInfo.counties[18].eng縣市"/>
            </StackLayout>
        </StackLayout>
    </ScrollView>
</template>

<script>
    export default {
        props: ["data", "selectedCounty", "hideThis"],
        methods: {
            setNewFilter: function (args) {
                this.$emit('changeTheSelectedOne', args.object.link);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../theme/variables";

    .county {
        margin-top: 3%;
        margin-bottom: 3%;
    }

    .county Label {
        border-radius: 50%;
        border-width: 1;
        border-color: $primary;
        border-style: solid;
        margin-left: 8;
        padding: 4%;
    }

    .county .filled {
        background-color: $primary;
        color: $white;
    }

    .county Label.fas{
        vertical-align: middle;
        font-size: 20;
    }

</style>
