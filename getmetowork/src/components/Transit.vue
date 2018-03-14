<template>
  <div>
      Busses:
      <bus></bus>
  </div>
</template>

<script>
    import Bus from '@/components/Bus'

    export default {
        name: 'Transit',
        data(){
            return{

            }
        },
        components: {
            Bus
        }
    }
</script>
 
<style lang="stylus" scoped>

</style>