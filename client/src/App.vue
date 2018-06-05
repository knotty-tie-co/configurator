<template>

  <div id="app">
    <div class="uk-container">
      <div class="uk-card uk-card-body uk-card-primary">
        <h3 class="uk-card-title">Example headline</h3>

        <button class="uk-button uk-button-default" uk-tooltip="title: Hello World">Hover</button>
        <button
            class="uk-button uk-button-default"
            v-if="!authenticated"
            @click="login()">
              Log In
          </button>

          <button
            class="uk-button uk-button-default"
            v-if="authenticated"
            @click="logout()">
              Log Out
          </button>
          <button
            class="uk-button uk-button-default"
            v-if="authenticated"
            @click="getProfile()">
              Get Profile
          </button>
      </div>
    </div>
    <router-view  
      :auth="auth" 
      :authenticated="authenticated" />
  </div>
</template>

<script>
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import AuthService from './services/AuthService'


const auth = new AuthService()

const { login, logout, authenticated, authNotifier, getProfile, displayProfile } = auth


UIkit.use(Icons)
export default {
  name: 'App',
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout,
    getProfile,
    displayProfile
  }
}
</script>

<style lang="less">
@import './assets/theme/theme.less';
</style>
