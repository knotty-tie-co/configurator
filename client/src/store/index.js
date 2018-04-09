import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// initial state
const state = {
  count: 5
}

// getters
const getters = {
	
}

// actions
const actions = {
	
}

// mutations
const mutations = {
	increment: state => state.count++,
    decrement: state => state.count--
}

// one store for entire application
export default new Vuex.Store({
	state,
	strict: debug,
	getters,
	actions,
	mutations
})