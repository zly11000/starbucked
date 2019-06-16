<template>
<div>
    <div class="header">
        <span>
          登录
        </span>
        <div class="left" @click="$router.back()">
            <i class="iconfont icon-arrow-left"></i>
        </div>
    </div>
    <div>
        <p>
            <input type="text" placeholder="请输入密码" v-model="user"/>
        </p>
         <p>
            <input type="text" placeholder="请输入密码" v-model="pwd"/>
        </p>
    </div>
    <div class="log" @click="btn">登录</div>
</div>
</template>
<script>
import axios from "axios";
import api from "@/api"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            user:"",
            pwd:""
        }
    },
    computed:{
    },
    methods:{
        btn(){
            if(this.user.trim() !== "" && this.pwd.trim() !== ""){
             api.loginInfo({
                  phone:this.user,
                  password:this.pwd
              }).then(data=>{
                  let {token} = data;
                 window.localStorage.setItem("token",token);
                 console.log(this.$router)
                 this.$router.back();
              }).catch(error=>{
                  this.$alert(error.response.data.message)
              })
            }else{
                this.$alert("用户名或密码不能为空")
            }
        }
    },
    created(){
        console.log()
    },
    mounted(){
    }
}
</script>
<style scoped lang="scss">
@import "../static/style/_minix.scss";
@import "../static/style/common";
.header{
    width: 100%;
    @include height(pxTorem(45px)); 
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size:pxTorem(16px);
}
p{
    padding:pxTorem(15px);
    border-bottom:1px solid #ccc;
    padding-top:pxTorem(30px)
}
.log{
    width:90%;
    height:100px;
    background: #ccc;
    border-radius: 50px;
    margin:120px auto;
    text-align: center;
    line-height: 100px;
}
.header .left{
    position:absolute;
    top:2%;
    left:3%;
}
.header .data{
    position:absolute;
    top:2%;
    right:15%;
}
.header .search{
    position:absolute;
    top:2%;
    right:5%;
}

.header .left i{
   font-size:30px;
}

</style>