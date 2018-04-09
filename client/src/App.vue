<template>

  <div id="app">
    <div class="uk-container">
      <h1>Auth Flow</h1>
      <ul>
        <li>
          <router-link v-if="loggedIn" to="/logout">Log out</router-link>
          <router-link v-if="!loggedIn" to="/login">Log in</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/dashboard">Dashboard</router-link>
          (authenticated)
        </li>
      </ul>
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
import auth from './auth'

UIkit.use(Icons)
export default {
  name: 'App',
  data () {
    return {
      loggedIn: auth.loggedIn()
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  }
}
</script>

<style lang="less">
@import './assets/theme/theme.less';
</style>
