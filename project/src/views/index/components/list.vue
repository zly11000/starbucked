<template>
         <div class="box" @click="details(item)">
            <div class="top-box">
                <span>{{item.applicationNumber}}</span>
            </div>
            <div class="bottom-box">
                <div class="bod">
                <div>
                   <span>申请人</span>
                    <b>{{item.nickname}}</b>
                </div>
                <div>
                   <span>加班日期</span>
                    <b>{{data}}</b>
                </div>
            </div>
              <div class="bod">
                <div>
                   <span>加班类型</span>
                    <b>{{type}}</b>
                </div>
                  <div>
                   <span>加班时数</span>
                    <b class="time">{{times}}</b>
                </div>
            </div>
            </div>
           
        </div>
</template>
<script>
export default {
    props:["item"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        data(){
           return this.item.create_at.slice(0,10)
        },
        type(){
            if(this.item.list_type==="overtime"){
                return "工作日加班"
            }else{
                return "工作日休假"
            }
        },
        times(){
            let datas = new Date(this.item.endTime)*1 - new  Date(this.item.startTime)*1;
            return datas/3600000/24
        }
    },
    methods:{
        details(item){
            this.$router.push({name:"detail",params:{type:item.list_type,id:item.applicationNumber}})
        }
    },
    created(){
       
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
   .box{
        width:100%;
        min-height:pxTorem(200px);
        background:#fff;
        display: flex;
        margin-bottom:3%;
        flex-direction: column;
        .top-box{
            width: 100%;
            height:60px;
            display: flex;
            align-items: center;
           span{
               padding-left:30px;
               color:#ccc;
           }
        }
        .bottom-box{
            flex:1;
            display: flex;
            .bod{
            flex:1;
            div{
                padding:22px 0px 10px 30px; 
                display: flex;
                span{
                    flex:4;
                    font-size: 20px;
                     color:#ccc;
                }
                b{
                    flex:6;
                    display:flex;
                    align-items: center;
                }
            }
        }
        .bod:nth-child(2) b{
            padding-left:15%;
        }
         .bod:nth-child(2) span{
            padding-left:10%;
        }
        }
    }
</style>