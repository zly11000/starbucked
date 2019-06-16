<template>
  <div class="wrap">
    <my-header class="head" :back="true" :title="type==='overtime'? '办公室加班申请' : '办公室休假申请'"></my-header>
    <main class="main">
      <div class="top">
        <dl>
          <dt>
            <img class="img" :src="userinfo.avatar" alt>
          </dt>
          <dd>
            <p>
              <span class="first">申请人姓名</span>
              <span>{{userinfo.nickname}}</span>
              <span>
                <i class="iconfont icon-angle-right ico"></i>
              </span>
            </p>
            <p>
              <span>直接主管</span>
              <span>I don`t know</span>
            </p>
          </dd>
        </dl>
      </div>
      <div class="bottom">
        <div class="bottom-top">
          <ul>
            <h4>申请信息</h4>
            <li>
              <span>{{types}}日期</span>
              <span class="last">
                <el-date-picker type="date"
                value-format="yyyy-MM-dd"
                :placeholder="new Date().toLocaleDateString()"
                :default-value="new Date().toLocaleDateString()"
                 v-model="day"></el-date-picker >
              </span>
            </li>
            <li>
              <span>{{types}}类型</span>
              <span>
                <select v-model="selectValue">
                  <option value="-1">默认</option>
                  <option v-for="(item) in this[type+'Data']" :key="item.id">{{item.title}}</option>
                </select>
              </span>
            </li>
            <li>
              <span>{{types}}起始时间</span>
              <span class="lasts">
                <el-time-picker type="date" v-model="startTimes"></el-time-picker>
              </span>
            </li>
            <li>
              <span>{{types}}截止时间</span>
              <span class="lasts">
                <el-time-picker type="date" v-model="endTimes" @change="times"></el-time-picker>
              </span>
            </li>
            <li>
              <span>共计时数</span>
              <span>{{timed}}</span>
            </li>
          </ul>
        </div>
        <div class="bottom-center">
          <ul>
            <h4>{{types}}事由</h4>
            <li>
                <input placeholder="理由" class="inp" v-model="response"/>
            </li>
          </ul>
        </div>
        <div class="bottom-bottom">
          <h4>
            <span>
              <i class="iconfont icon-tianjia add"></i>
            </span>
            <span class="up">上传附件</span>
          </h4>
             <div class="ddf">
                <ul>
                  <li v-for="(item,index) in arr" :key="index">
                    <img :src="'http://localhost:3000'+item" alt=""/>
                  </li>
                   <li class="inpBtns" v-if="openTrue">
                     <input type="file" class="ipt" @change="filed"/>
                      <span>+</span>
                   </li>
                </ul>
             </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="footer-item" @click="backs">
        <span>取消</span>
      </div>
      <div class="footer-item" @click="addUp">
        <span>提交</span>
      </div>
    </footer>
  </div>
</template>
<script>
import myHeader from "../components/header";
import "../static/fonts/iconfont.css";
import isFile from "../utils/isfile";
import request from "../utils/request"
import api from "@/api"
import { mapState, mapActions } from "vuex";
export default {
  props: {
    type: String
  },
  components: {},
  data() {
    return {
      day: "",
      startTimes:new Date(),
      endTimes: new Date(),
      timed:"",
      arr:[],
      response:"",
      selectValue:"",
      openTrue:true,
      overtimeData: [
        {
          id: 1,
          title: "双休日加班"
        },
        {
          id: 2,
          title: "节假日加班"
        },
        {
          id: 3,
          title: "工作日加班"
        }
      ],
      vacationData: [
        {
          id: 1,
          title: "年假"
        },
        {
          id: 2,
          title: "调休"
        }
      ]
    };
  },
  computed: {
    ...mapState("userData", ["userinfo"]),
    types() {
      return this.type === "overtime" ? "加班" : "休假";
    },
     
  },
  watch:{
    arr(val){
      if(val.length>=3){
        this.openTrue = false;
      }
    }
  },
  methods: {
    ...mapActions("userData", ["userInfo"]),
    times(){
       let newTimes = new Date(this.endTimes).getTime() - new Date(this.startTimes).getTime();
       if(newTimes<0){
           alert("您的操作不合理");
           return;
       }
       let time = Math.floor(newTimes/3600/1000)
       this.timed= time
    },
    filed(e){
       let filenames = e.target.files[0];
       let filesd = new isFile(filenames,{
            img:["png","gif","jpg","jpeg"],
            size:3,
        })
         if(filesd.isImage() && filesd.isSize()){
           const formdata = new FormData();
             formdata.append("file",filenames);
              api.loadupData(formdata).then(data=>{
                console.log(data.url)
               this.arr.push(data.url);
             })
       }
    },
    addUp(){
       let obj = {
         annex:this.arr,
         describe:this.response,
         endTime:this.endTimes,
         startTime:this.startTimes,
         type:this.selectValue
       }
       if(obj.endTime !== "" && obj.startTime !== "" && obj.type!==""){
         api[this.type + 'Submit'](obj).then(data=>{
           this.$alert(data.msg)
         })
       }else{
         this.$alert("请完善信息");
       }
    },
    backs(){
       this.$router.back()
    }
  },
  created() {
    this.userInfo();
    console.log(this.$router)
  },
  mounted() {
    
  }
};
</script>
<style  lang="scss">
@import "../static/style/_minix.scss";
@import "../static/style/common";
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.dd{
    width: 50%;
    height:100%;
    padding-top:40px;
    display:block;
}
.ip{
    width: 100%;
    height:100%;
    display:block;
    z-index:999;
}
.n img{
    width: 200px;
    height:200px;
    padding:3px 15px;
}
.inp{
    border:0;
    outline:none;
}
.ddf{
  width: 100%;
  min-width:150px;
  ul{
    width:100%;
    height:100%;
    display: flex;
    li{
      width: pxTorem(120px);
      height:pxTorem(120px);
      border:1px solid #ccc;
       display: flex;
        align-items: center;
        justify-content: center;
         padding:0 5px;
      img{
        max-width:100%;
        max-height:100%;
      }
    }
  }
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
    @include height(pxTorem(120px));
    background: #0b6242;
    border-bottom-right-radius: 30%;
    border-bottom-left-radius: 30%;
    .img {
      border-radius: 50%;
    }
    .ico {
      float: right;
      font-size: pxTorem(16px);
      padding-left: 6%;
    }
    dl {
      color: #ccc;
      display: flex;
      dt {
        width: 70px;
        height: 70px;
        padding-top: pxTorem(11px);
        padding-left: pxTorem(15px);
      }
      dd {
        p {
          padding-top: pxTorem(11px);
          padding-left: pxTorem(30px);
          width: 100%;
        }
        .first {
          margin-right: pxTorem(30px);
        }
        span {
          margin-right: pxTorem(40px);
        }
      }
    }
  }
  .inpBtns{
    width: pxTorem(120px);
    height:pxTorem(120px);
    border: 1px solid #ccc;
    position: relative;
  }
  .inpBtns input{
    width:100%;
    height:100%;
    opacity: 0;
  }
  .inpBtns span{
    display: block;
    width:5px;
    height: 5px;;
    position:absolute;
    top:45%;
    left:48%;
    color:green;
    font-weight: 900;
  }
  .bottom {
    flex: 1;
    overflow: auto;
    width: 100%;
    width: 90%;
     margin-left: 5%;
    margin-top: -8%;
    z-index: 999;
    &::-webkit-scrollbar{
        display: none;
    }
    .bottom-top {
      border-radius: 6px;
      min-height: pxTorem(228px);
      background: #fff;
      h4 {

        @include height(pxTorem(37px));
        border-bottom: 1px solid #f5f5f5;
        display: flex;
        align-items: center;
          margin-left: 15px;
      }
      ul {
        li {
            //  padding-left:15px;
          padding-top: 25px;
          display: flex;
          justify-content: space-between;
          span:nth-child(1) {
            margin-left: 15px;
          
          }
          span:nth-child(2) {
             margin-right: 15px;
           
          }
        }
      }
    }
    .bottom-center {
      border-radius: 6px;
      min-height: pxTorem(148px);
      background: #fff;
      margin-top: 5%;
      h4 {
        @include height(pxTorem(37px));
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
          margin-left: 15px;
      }
      li {
        padding-left: 15px;
        padding-top: 10px;
      }
    }
    .bottom-bottom {
      border-radius: 6px;
      min-height: pxTorem(50px);
      background: #fff;
      margin-top: 5%;
      position: relative;
      .up{
          position:absolute;
          left:10%;
      }
      h4 {
        display: flex;
        width: 100%;
        min-height: pxTorem(50px);
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        .add {
          font-size: pxTorem(16px);
          color: yellow;
        padding-left: pxTorem(15px);
        }
      }
    }
  }
}
.footer {
  width: 100%;
  @include height(pxTorem(45px));
  background: #fff;
  display: flex;
  .footer-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer-item:nth-child(1) {
    flex:3;
    background: #fff;

  }
  .footer-item:nth-child(2) {
    background: #06613f;
    color: #fff;
    flex:8;
  }
}
</style>