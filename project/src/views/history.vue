<template>
    <div class="wrap">
        <my-header class="head" :back="true" :title="'审批历史'"></my-header>
        <div class="box">
            <div class="bod">
                <div>
                   <span>申请人</span>
                    <b>Liian Liyan Lin</b>
                </div>
                <div>
                   <span>员工职务</span>
                    <b>P2</b>
                </div>
            </div>
              <div class="bod">
                <div>
                   <span>部门</span>
                    <b>星巴克营运部...</b>
                </div>
                  <div>
                   <span>员工编号</span>
                    <b>06060606</b>
                </div>
            </div>
        </div>
         <main class="main" >
         <div class="top">
        </div>
         <div class="bottom">
          <div class="bottom-top" >
              <dl v-for="(item,index) in arr" :key="index">
                  <div>
                      <p class="fir">2018.01.08</p>
                      <p>21:58</p>
                  </div>
                      <dt><img :src="item.avatar" alt=""/></dt>
                      <dd>
                          <h4>{{item.nickname}}</h4>
                          <p>主管</p>
                          <p>审批意见:{{item.remark}}</p>
                      </dd>
              </dl>
          </div>
      </div>
    </main>
    </div>
</template>
<script>
import myHeader from "../components/header";
import api from "@/api"
export default {
    props:{
        id:String

    },
    components:{

    },
    data(){
        return {
            arr:[]

        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        console.log(this.id)
        api.historyList({
            params:{
                 applicationNumber:this.id
            }
        }).then(data=>{
            this.arr = data.data
            console.log(this.arrs)
        })
    },
    mounted(){
    }
}
</script>
<style scoped lang="scss">
@import "../static/style/_minix.scss";
@import "../static/style/common";
.wrap{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    position: relative;
    .head{
        background: #0b6242;
        color:#fff;
    }
    .box{
        width:90%;
        min-height:pxTorem(80px);
        background:#fff;
        position:absolute;
        left:5%;
        top:pxTorem(100px);
        border-radius:pxTorem(10px);
        display: flex;
        .bod{
            flex:1;
            div{
                padding:22px 0px 10px 15px; 
                display: flex;
                span{
                    flex:4;
                }
                b{
                    flex:6;
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
    
}
.main {
   flex: 1;
   display: flex;
   flex-direction: column;
   background: #f5f5f5;
  .top {
    width: 100%;
     @include height(pxTorem(100px));
     background: #0b6242;
     border-bottom-right-radius: 30%;
     border-bottom-left-radius: 30%;
  }
  .bottom{
      margin-top:20%;
     .bottom-top{
         width: 100%;
         height:100%;
         dl{
             width:100%;
             min-height:pxTorem(100px);
             display: flex;
             div{
                 flex:3;
                 p{
                     padding-left:pxTorem(15px);
                 }
                //  margin-left:
               
             }
             dt{
                 flex:2;
                
                 img{
                     width: 100px;
                     height:100px;
                     border-radius: 50%;
                 }
             }
             dd{
                 flex:5;
             
                 h4{
                     padding-top:2%;
                 }
                 p:nth-child(3){
                     background: #ccc;
                     padding:2px 5px;
                     margin-top:pxTorem(7px);
                     width:70%;
                 }
             }
         }
         .fir{
             margin-top:5%;
         }
         
     }
        
    }
}
</style>