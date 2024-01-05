// 用于创建Requirement类
export default class Requirement{
    constructor(id,requirement_name,detailId,ownerId,status,dueDate,priority,createTime,last_updated_time,last_update){
        this.id=id;
        this.requirement_name=requirement_name;
        this.detailId=detailId;
        this.ownerId=ownerId;
        this.status=status;
        this.dueDate=dueDate;
        this.priority=priority;
        this.createTime=createTime;
        this.last_updated_time=last_updated_time;
        this.last_update=last_update;
    }
}