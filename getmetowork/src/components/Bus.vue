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
import { API, HARLEM, IRVING } from '@/constants'

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
            console.log('HARLEM:', HARLEM)

            return; ////REMOVE WHEN READY

            axios.get(`${API.BUS.URL}?key=${API.BUS.KEY}&rt=${HARLEM.ROUTE}&stpid=${HARLEM.DIRECTION.SOUTHBOUND}&format=json`)
            //axios.get(`${API.BUS.URL}?key=${API.BUS.KEY}&rt=${IRVING.ROUTE}&stpid=${IRVING.DIRECTION.WESTBOUND}&format=json`) 
            .then((response) => {
                let data = response.data["bustime-response"]
                console.log(data)
                this.nextBus = data.prd;
                this.transitError = (data.error ? data.error[0].msg : '') 
                console.log('this.transitError', this.transitError)
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
