<template>
    <div class="wrap">
        <my-header :logo="true" :log="true" :title="title" :back="true"></my-header>
        <nav>
            <ul v-for="(item,index) in data" :key="index" @click="uls(index,item)" :class="{active:index === ind}">
                  <span><i :class="item.ico"></i></span>
                  <span>{{item.name}}</span>
            </ul>
        </nav>
        <div class="task" @click="log">
            <span></span>
            <span>发起任务</span>
        </div>
          <my-table  @small="add" :ind="myTableind"></my-table>
          <main class="main">
            <my-list v-for="(item,index) in list" :key="index" :item="item"></my-list>
          </main>
         <my-dialog @logs="btn" :open="open"></my-dialog>
    </div>
</template>
<script>
import "../../static/fonts/iconfont.css";
import myTable from "./components/table"
import myDialog from "../../components/dialog";
import myList from "./components/list";
import api from "../../api/index"
export default {
    name:"index",
    props:{

    },
    components:{
        myDialog,
        myTable,
        myList
    },
    data(){
        return {
            title:"加班/详情",
            list:[],
            open:false,
            ind:0,
            myTableind:0,
            data:[
                {
                    name:"待处理",
                    link:"/index/await",
                    ico:"iconfont icon-email",
                    status:0
                },{
                    name:"已发起",
                    link:"/index/already",
                    ico:"iconfont icon-zuobiao",
                    status:1
                },{
                    name:"已处理",
                    link:"/index/alread",
                    ico:"iconfont icon-yibangding",
                    status:2
                }
            ],
            dataUrl:{
                page:1,
                pageSize:10,
                create_at:0,
                type:"overtime",
                status:0
            }
        }
    },
    computed:{
    },
    methods:{
        
        btn(){
           this.open = false;
        },
        log(){
            this.open = !this.open
        },
        uls(index,item){
            this.ind = item.status;
            this.dataUrl.status = this.ind;
            this.myTableind=0;
            this.dataList()
        },
        dataList(){
            api.indexList({
                 params:this.dataUrl
             }).then(data=>{
           this.list = data.data;
          })
        },
        add(type,index){
           this.dataUrl.type = type;
           this.myTableind=index;
           this.dataList()
        }
    },
    created(){  
        this.dataList()
    },
    mounted(){
    }
}
</script>
<style scoped lang="scss">
@import "../../static/style/_minix.scss";
@import "../../static/style/common";
.wrap{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
}
nav{
    width:100%;
     @include height(pxTorem(50px));
      display: flex;
      justify-content: space-around;
      align-items: center;
}
nav ul{
   display: flex;
    flex-direction: column;
    color:#ccc;
}
nav ul.active{
    color:green;
}
nav a.router-link-active{
    color:green;
}
nav ul span{
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.task{
    padding:25px 55px;
    background: green;
    color:#fff;
    position:fixed;
    top:90%;
    right:10%;
     border-radius: 50px;
}
.main{
    flex:1;
    overflow: auto;
    background: #f8f8f8;
}
</style>