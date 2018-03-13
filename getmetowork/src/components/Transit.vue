<template>
  <div>
      Transit, we'll bring bus in here, this will be the hub, get it?
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