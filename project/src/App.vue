<template>
    <keep-alive include="index"> 
      <router-view></router-view>
    </keep-alive>
</template>
<script>
import request from "./utils/request";
import {mapActions} from "vuex"
export default {
  name: 'App',
  created(){
    this.userInfo()
  },
  methods:{
    ...mapActions("userData",["userInfo"])
  }
}
</script>
<style>
*{
  padding:0;
  margin: 0;
  list-style: none;
  text-decoration:none;
}
html,body{
  width: 100%;
  height:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main{
  flex: 1;
  overflow: auto;
}
</style>
