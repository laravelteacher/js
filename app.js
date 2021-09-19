
 require("./bootstrap");

 import router from "./router";
 import "./axios";
 import store from "./vuex";
  import Toasted from "vue-toasted";
   window.Vue = require("vue").default;
   Vue.use(Toasted);

 
 Vue.component("app", require("./App.vue").default);
 
 
 const app = new Vue({
     router,
     store,
     el: "#app"
 });
 