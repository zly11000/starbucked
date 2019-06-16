<template>
<div>
    <transition class="dia">
    <div class="dialog" v-if="open" @click.self="$emit('logs')">
    </div>
    </transition>
    <transition>
    <div class="food"  v-if="open">
            <router-link class="food-item" to="/commit/overtime">
                <span class="la"><i class="iconfont icon-weixin11"></i></span>
                <span class="fi">加班</span>
            </router-link>
            <router-link class="food-item" to="/commit/vacation">
                <span class="la"><i class="iconfont icon-guangpan"></i></span>
                <span class="fi">休假</span>
            </router-link>
        </div>
        </transition>
    </div>
</template>
<script>
import "../static/fonts/iconfont.css"
export default {
    props:["open"],
    components:{
    },
    data(){
        return {
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
.dialog{
    position:absolute;
    width:100%;
    height:100%;
    background: rgba(0,0,0,.5);
    top:0;
    left:0;
    z-index:99;
    &.dia-enter,&.dia-leave-to{
        opacity:0;
    }
     &.dia-enter-active,&.dia-leave-active{
       transition: opacity 2s;
    }

     &.dia-enter-to,&.dia-leave{
        opacity:1;
    }

 
}
.food{
    width:100%;
    height:15%;
    background: #fff;
    position:absolute;
    bottom:0;
    left:0;
    display: flex;
    z-index:99;
   
}
.food-item{
    flex:1;
    display: flex;
    align-items: center;
    justify-content:center;
    display: flex;
    flex-direction: column;
}
.food-item span{
    flex:1;
     display:flex;
    align-items: center;
}
.food-item  i{
    font-size:60px;
}
.la{
    padding-top:12%;
}
.fi{
    padding-bottom:10%;
}
.icon-weixin11{
    color: yellow;
}
.icon-guangpan{
    color:green;
}
</style>