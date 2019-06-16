<template>
    <div class="wrap">
        <div class="top">
            <div class="input-box">
                <input type="text" placeholder="搜索" v-model="values"/>
                <i class="iconfont icon-fangdajing" v-if="openSearch"></i>
            </div>
             <span class="dele">取消</span>
        </div>
    </div>
</template>
<script>
import "../static/fonts/iconfont.css";
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            openSearch:true,
            values:""

        }
    },
    computed:{
    },
    methods:{
        searched(){
            
        }
      
    },
    created(){
        console.log(this.values)
    },
    mounted(){
    }
}
</script>
<style scoped lang="scss">
@import "../static/style/common";
.wrap{
    width: 100%;
    height:100%;
    .top{
        width: 100%;
        height:60px;
        display: flex;
        .input-box{
            width: 80%;
            padding-top:1%;
            margin-left:1%;
            position: relative;
            input{
                width: 100%;
                height:100%;
                border:0;
                outline:none;
                background: #eee;
                &::-webkit-input-placeholder{
                    font-size:20px;
                     padding-left:10%;
                }
            }
            .icon-fangdajing{
                position:absolute;
                top:40%;;
                left:2%;
            } 
           
      }
       .dele{
                flex:1;
                display: flex;
                justify-content:center;
                align-items: center;
                color:green;
            }
    }
    
}
</style>