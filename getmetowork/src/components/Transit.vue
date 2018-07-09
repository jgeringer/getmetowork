<template>
  <div>
      Busses:
      <bus></bus>

      <navigation></navigation>
  </div>
</template>

<script>
    import Bus from '@/components/Bus'
    import Navigation from '@/components/Navigation'

    export default {
        name: 'Transit',
        data(){
            return{

            }
        },
        components: {
            Navigation,
            Bus
        }
    }
</script>
 
<style lang="stylus" scoped>

</style>