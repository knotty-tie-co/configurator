<template>
  <div >
    <h1>You are viewing the restricted page</h1>
    <h2 v-if="authenticated">You are viewing the restricted content</h2>
    <h2 v-if="!authenticated">You are not logged in</h2>
  </div>
</template>

<script>

export default {
  name: 'Restricted',
  props: ['authenticated']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
