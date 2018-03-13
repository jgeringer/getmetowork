<template>
    <div>
        Next Bus: 
        <div v-for="bus in nextBus.prd">
            {{bus.prdctdn}}
        </div>
        {{transitError}}    
    </div>
</template>

<script>
import axios from 'axios'

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
            axios.get("https://can-cors.herokuapp.com/http://www.ctabustracker.com/bustime/api/v2/getpredictions?key=5kQ32nKLH7YSWPBxsw4kX7q7h&rt=80&stpid=14550&format=json") //90(harlem), 7861(belmont), 1813(montrose) wb: rt-78(stpid: 14813)
            .then((response) => {
                console.warn('response: '+ response)
                this.nextBus = response["bustime-response"];
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
