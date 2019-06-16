<template>
    <div class="header">
        <span>
           {{title}}
        </span>
        <div class="left" v-if="back" @click="$router.back()">
            <i class="iconfont icon-arrow-left"></i>
        </div>
        <div class="data" v-if="logo">
            <i class="iconfont icon-riqixuanze"></i>
        </div>
         <div class="search" v-if="log">
            <router-link to="/search"><i class="iconfont icon-fangdajing"></i></router-link>
        </div>
    </div>
</template>
<script>
import "../static/fonts/iconfont.css";
export default {
    props:["logo","log","title","back"],
    components:{
    },
    data(){
        return {
            //  back:true,
            // logo:true,
            // log:true,
            // title:"加班/休假"

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style  lang="scss">
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
span{
    font-size: 30px;
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
.header .data i{
   font-size:30px;
}
.header .search i{
   font-size:30px;
}




</style>