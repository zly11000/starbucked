import Vue from "vue";
import Vuex from "vuex";
import userData from "./modules/user";
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        userData
    },
    state:{
        open:false
    },
    getters:{
    },
    mutations:{
    },
    actions:{
    }
})