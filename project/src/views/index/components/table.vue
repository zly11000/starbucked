<template>
      <div class="bb">
    <div class="box">
        <span v-for="(item,index) in list" :key="index" @click="smallChange(index)" :class="{active:index === ind}">
            {{item.name}}
        </span>
    </div>
</div>
</template>
<script>
export default {
    props:["ind"],
    components:{

    },
    data(){
        return {

            list:[
                {
                    name:"加班"
                },
                 {
                    name:"休假"
                }
            ]

        }
    },
    computed:{

    },
    methods:{
        smallChange(index){
            // this.ind = index;
            let type = index === 0 ? "overtime" :"vacation";
            this.$emit("small",type,index)
        }

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.bb{
    width:100%;
    height:200px;
    /* background: #fff; */
     box-shadow: 0px 30px 20px #eee inset;
    /* margin-top:-50px; */
}
.box{
    width:60%;
    height:50px;
    /* background: #fff; */
   display: flex;
    display: flex;
    margin: 0 auto;
    padding-top:10%;
    /* margin:50px auto; */
}
.box span{
    display: flex;
    flex:1;
    text-align: center;
    border:1px solid red;
    align-items: center;
    justify-content: center;
}
.box span.active{
    background: green;
}
.box span:first-child{

    border-radius: 50px 0 0 50px;

}
.box span:last-child{

    border-radius: 0px 50px 50px 0;

}
</style>