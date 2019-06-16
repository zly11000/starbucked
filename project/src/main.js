// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import "./static/flexble";
import Header from "./components/header";
import store from "./store/index";
import {DatePicker,TimePicker } from "element-ui";
import submitValue from "./components/submit/index";
Vue.component("my-header",Header);
Vue.use(DatePicker);
Vue.use(TimePicker)
Vue.config.productionTip = false;
let submit = Vue.extend(submitValue);
Vue.prototype.$alert = (title)=>{
  let bb = new submit({
    propsData:{
      text:title
    }
 })
 document.body.appendChild(bb.$mount().$el)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
