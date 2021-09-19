import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const state = {
    user: null
};

const store = new Vuex.Store({
    state,
    // what is getters in vuex
   // Getters are a part of Vuex store and they are used to calculate data based on store state. 
   // They cache data and smartly update themselves when the state changes;
   // They can return functions, so that it's possible to pass additional arguments to calculate 
   // data based on them.
    getters: {
        user: (state) => {
            return state.user;
        }
    },
    //  what is actions in vuex
    //  Actions are just functions that dispatch mutations.
    actions: {
        user: (context, user) => {
            context.commit('user', user);
        }
    },
    // what is mutations in vuex
    // Vuex mutations are essentially events: each mutation has a name and a handler.
    mutations: {
        user: (state, user) => {
            state.user = user;
        }
    },
    plugins: [createPersistedState()]
});

export default store;
