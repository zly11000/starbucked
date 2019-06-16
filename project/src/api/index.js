import request from "../utils/request";
export default {
    //登陆验证
     loginInfo:(data)=>request.post("/api/login",data),
     //首页数据
     indexList:(data)=>request.get("/api/task/list",data),
     //加班详情
     overtimeList:(data)=>request.get("/api/apply/overtime",data),
     //休假详情
     vacationList:(data)=>request.get("/api/apply/vacation",data),
     //图片上传
     loadupData:(file)=>request.post("/api/upload",file),
     //加班提交
     overtimeSubmit:(data)=>request.post("/api/apply/overtime",data),
     //休假提交
     vacationSubmit:(data)=>request.post("/api/apply/vacation",data),
     //历史审批
      historyList:(data)=>request.get("/api/task/history",data)
}