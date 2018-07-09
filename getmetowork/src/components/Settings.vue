<template>
  <div>
    <h1>{{ msg }}</h1>

    <navigation></navigation>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'Settings',
  data () {
    return {
      msg: 'Settings here'
    }
  },
    components: {
        Navigation
    }
}
</script>

<style scoped>

</style>
