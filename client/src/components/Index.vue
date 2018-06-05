<template>
	<div>
      <p>hello</p>
	    <hello></hello>
      <color></color>
	</div>
</template>

<script>


export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
