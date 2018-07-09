<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/settings">Settings</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      msg: 'Navigation here'
    }
  }
}
</script>

<style scoped>

</style>
