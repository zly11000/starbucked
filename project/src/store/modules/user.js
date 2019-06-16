import request from "../../utils/request";
export default {
        namespaced:true,
        state:{
            userinfo:{}
        },
        mutations:{
            getList(state,arr){
                state.userinfo = arr
            }
        },
        actions:{
            userInfo(context){
                request.get("/api/user/info").then(res=>{
                    context.commit("getList",res.data)
                })  
            }
        }
}