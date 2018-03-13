<template>
    <div>
        Next Bus: 
        <div v-for="bus in nextBus">
            <p>Time Left: {{bus.prdctdn}}</p>
        </div>
        {{transitError}}    
    </div>
</template>

<script>
import axios from 'axios'
import { BUS_KEY } from '@/constants'

export default {
    name: "Bus",
    data() {
        return {
            nextBus: [],
            transitError: []
        }
    },
    mounted(){
        this.getBusses()
    },
    methods: {
        getBusses: function(){
            console.log('getBusses')
            console.log('BUS_KEY', BUS_KEY)
            return; ////REMOVE WHEN READY

            axios.get("https://can-cors.herokuapp.com/http://www.ctabustracker.com/bustime/api/v2/getpredictions?key=5kQ32nKLH7YSWPBxsw4kX7q7h&rt=80&stpid=14550&format=json") //90(harlem), 7861(belmont), 1813(montrose) wb: rt-78(stpid: 14813)
            .then((response) => {
                console.log(response.data["bustime-response"])
                this.nextBus = response.data["bustime-response"].prd;
            }, (error) => {
                this.transitError = error;
                console.log('myerror: ', this.transitError)
            })
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
