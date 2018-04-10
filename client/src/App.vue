<template>

  <div id="app">
    <div class="uk-container">
      <div class="uk-card uk-card-body uk-card-primary">
        <h3 class="uk-card-title">Example headline</h3>

        <button class="uk-button uk-button-default" uk-tooltip="title: Hello World">Hover</button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)
export default {
  name: 'App'
}
</script>

<style lang="less">
@import './assets/theme/theme.less';
</style>
