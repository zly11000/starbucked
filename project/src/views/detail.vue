<template>
  <div class="wrap">
    <my-header class="head" :logo="false" :log="false" :title="type==='overtime'?'办公室加班申请表':'办公室休假申请表'" :back="true"></my-header>
    <main class="main"  v-if="detailList.startTime">
      <div class="top">
       <dl>
           <dt>
               <img class="img" :src="detailList.avatar" alt=""/>
           </dt>
            <dd>
                <p><span class="first">申请人姓名</span><span>{{detailList.nickname}}</span><span><i class="iconfont icon-angle-right ico"></i></span></p>
                <p><span>直接主管</span><span>{{detailList.nickname}}</span></p>
                <p><span>申请单号</span><span>{{detailList.applicationNumber}}</span></p>
                <p><span>发起时间</span><span>{{this.detailList.startTime.slice(0,10)}}</span></p>
            </dd>
       </dl>
      </div>
      <div class="bottom">
          <div class="bottom-top" >
             <ul>
                  <h4><span>申请详情</span></h4>
                  <li><span>加班日期</span><span>{{this.detailList.create_at.slice(0,10)}}</span></li>
                  <li><span>加班类型</span><span>{{types}}</span></li>
                  <li><span>加班起始时间</span><span>{{this.detailList.startTime.slice(this.detailList.startTime.indexOf("T")+1,this.detailList.startTime.indexOf("."))}}</span></li>
                  <li><span>加班截止时间</span><span>{{this.detailList.endTime.slice(this.detailList.endTime.indexOf("T")+1,this.detailList.endTime.indexOf("."))}}</span></li>
                  <li><span>共计时数</span><span>{{times}}</span></li>
              </ul>
          </div>
           <div class="bottom-center" >
             <ul>
                  <h4><span>加班理由</span></h4>
                  <li>{{detailList.describes}}</li>
              </ul>
          </div>
            <div class="bottom-bottom" >
             <ul>
                  <h4><span>附件</span><span>{{detailList.annex.length}}个</span></h4>
                  <li v-for="(item,index) in detailList.annex">
                      <img :src="'http://localhost:3000'+item" alt=""/>
                  </li>
              </ul>
          </div>
      </div>
    </main>
    <footer class="footer">
        <div class="footer-item"> 
            <span></span>
            <span><router-link :to="  '/history/'  + detailList.applicationNumber  ">审批历史</router-link></span>
        </div>
        <div class="footer-item">
            <span @click="backed">退回</span>
        </div>
        <div class="footer-item">
            <span>同意</span>
        </div>
    </footer>
  </div>
</template>
<script>
import MyHeader from "../components/header";
import api from "@/api"
export default {
  props: {
      type:String,
      id:String
  },
  components: {},
  data() {
    return {
      detailList:{}
    };
  },
  computed: {
        types(){
            if(this.detailList.list_type==="overtime"){
                return "工作日加班"
            }else{
                return "工作日休假"
            }
        },
        times(){
             let datas = new Date(this.detailList.endTime)*1 - new  Date(this.detailList.startTime)*1;
            return datas/1000/3600
        }
  },
  methods: {
      backed(){
          this.$router.back()
      }

  },
  created() {
     api[this.type+'List']({
          params:{
              applicationNumber:this.id
          }
      }).then(data=>{
          this.detailList = data.data;
          console.log(data.data)
      })
      
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../static/style/_minix.scss";
@import "../static/style/common";
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.head {
  width: 100%;
  @include height(pxTorem(50px));
  background: #0b6242;
  color: #fff;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
   background: #f5f5f5;

  .top {
    width: 100%;
    @include height(pxTorem(150px));
    background: #0b6242;
    border-bottom-right-radius: 30%;
    border-bottom-left-radius: 30%;
   .img{
     border-radius: 50%;
     width:100px;
     height:100px;
   }
   .ico{
       float:right;
         font-size:pxTorem(16px);
         padding-left:6%;
   }
    dl{
        color:#ccc;
        display: flex;
        dt{
            width: 70px;
            height: 70px;
              padding-top:pxTorem(11px);
             padding-left:pxTorem(15px);
        }
       dd{
           p{
             padding-top:pxTorem(11px);
             padding-left:pxTorem(30px);
            width: 100%;
           }
           .first{
                padding-right:pxTorem(40px)
           }
           span{
                 padding-right:pxTorem(50px);
           }
       }
    }
  }
  .bottom{
      flex:1;
      overflow:auto;
      width:90%;
      height:100%;
      z-index:999;
       margin-left:5%;
       margin-top:-8%;
     
       &::-webkit-scrollbar{
           display: none;
       }
      .bottom-top{
            z-index:999;
          border-radius:6px;
          min-height:pxTorem(228px);
          background: #fff;
          h4{
              width: 100%;
               @include height(pxTorem(37px));
               border-bottom: 1px solid #f5f5f5;
               display: flex;
               align-items: center;
               span{
               padding-left:15px;
               }
           
          }
          ul{
              li{
              
                  padding-top:20px;
                  display: flex;
                  justify-content: space-between;
                  span:nth-child(1){
                     padding-left:15px;  
                  }
                   span:nth-child(2){
                      padding-right:15px;  
                  }
              }
          }
      }
      .bottom-center{
          border-radius:6px;
          min-height:pxTorem(148px);
          background: #fff;
          margin-top:5%;
          h4{
             width: 100%;
               @include height(pxTorem(37px));
               border-bottom: 1px solid #eee;
               display: flex;
               align-items: center;
               span{
                  padding-left:15px;
               }
             
          }
          li{
               padding-left:15px;  
               padding-top:10px;
               overflow: hidden;
          }
      }
      .bottom-bottom{
          border-radius:6px;
          height:pxTorem(148px);
          background: #fff;
          margin-top:5%;
          ul{
                 width: 100%;
                height:pxTorem(148px);
                li{
                    width: 200px;
                    height:100%;
                    float: left;
                      padding:5px 2px;
                }
                img{
                    width: 200px;
                    height:200px;
                     padding:5px 2px;
                }
             }
          h4{
              display: flex;
              justify-content: space-between;
                @include height(pxTorem(37px));
               border-bottom: 1px solid #eee;
               display: flex;
               align-items: center;
               span:nth-child(1){
                      padding-left:15px;  
                }
                   span:nth-child(2){
                      padding-right:15px;  
             }
             
          }
      }
  }
 
}
 .footer{
      width: 100%;
       @include height(pxTorem(45px));
       background: #fff;
       display: flex;
       .footer-item:nth-child(1){
           flex:3;
           display: flex;
           justify-content: center;
           align-items: center;
           a{
               color:#000;
           }
       }
       .footer-item:nth-child(2){
           flex:3.5;
           background: #404a54;
           color:#fff;
             display: flex;
           justify-content: center;
           align-items: center;
       }
       .footer-item:nth-child(3){
           background: #06613f;
           color:#fff;
           flex:3.5;
             display: flex;
           justify-content: center;
           align-items: center;
       }
  }
</style>