<template>
      <span v-if="open">{{text}}</span>
</template>
<script>
export default {
    props:{
        text:String

    },
    components:{

    },
    data(){
        return {
            open:true,
            timer:null

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){
      this.timer =  setTimeout(()=>{
            this.open=false

        },3000)

    },
    destroyed(){
        clearInterval(this.timer)

    }
}
</script>
<style scoped lang="">
 span{
    position:fixed;
    top:50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%);
    background:rgba(0, 0, 0, .6);
    z-index:9999;
    padding:10px 20px;
}
</style>