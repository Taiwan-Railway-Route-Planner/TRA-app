<template>
    <Page actionBarHidden="true">
        <DockLayout>
            <FlexboxLayout dock="bottom" class="bottom-menu">
                <FlexboxLayout class="menu-choose" @tap="">
                    <Label class="fas" :text="'\uf3c5' | unescape"></Label>
                </FlexboxLayout>
                <FlexboxLayout class="menu-choose" @tap="navToStar">
                    <Label class="fas" :text="'\uf005' | unescape"></Label>
                </FlexboxLayout>
                <FlexboxLayout class="menu-choose" @tap="navToSet">
                    <Label class="fas" :text="'\uf509' | unescape"></Label>
                </FlexboxLayout>
            </FlexboxLayout>
        </DockLayout>
    </Page>
</template>

<script>

    import handle from "../../assets/js/Vue/Route/handle"

    export default {
        props: ['routeDetails'],
        created: async function () {
            await handle.handleIncomingRouteDetails(this);
        },
        data() {
            return {
                timeTable: [],
                longDate: "20190704",
                props: {
                    routeDetails: {
                        language: 'ZH',
                        departure: {
                            details: {
                                "時刻表編號": 1008,
                                "traWebsiteCode": "1000",
                                "站名": "臺北",
                                "eng站名": "Taipei",
                                "routeCode": [
                                    1
                                ]
                            },
                            hint: '選擇哪一站',
                            label: '從'
                        },
                        arrival: {
                            details: {
                                "時刻表編號": 1025,
                                "traWebsiteCode": "1210",
                                "站名": "新竹",
                                "eng站名": "Hsinchu",
                                "routeCode": [
                                    4,
                                    1
                                ]
                            },
                            hint: '選擇哪一站',
                            label: '去'
                        },
                        time: {
                            label: '時間',
                            hint: '',
                            date: {
                                show: '2019年7月11日',
                                real: "20190704"
                            },
                            time: '11:45',
                            local: 'zh-tw',
                            modal: {
                                top: {
                                    first: 'DEPARTURE',
                                    second: 'ARRIVAL',
                                },
                                center: {
                                    button: 'Now',
                                    date: {
                                        actual: null,
                                        today: null
                                    }
                                },
                                bottom: {
                                    leftBtn: 'DISCARD',
                                    rightBtn: 'CONFIRM',
                                }
                            }
                        },
                        button: 'SEARCH'
                    }
                }
            }
        },
        methods: {
            navToStar: function () {

            },
            navToSet: function () {

            }
        }
    }

</script>

<style scoped>

</style>