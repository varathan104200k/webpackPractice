import { EmployeeType } from "./EmployeeType";

export class Employee{
    name='';
    exp=0;
    empType:EmployeeType=EmployeeType.None;

    constructor(name:string,exp:number,empType:EmployeeType){
        this.name=name;
        this.exp=exp;
        this.empType=empType;
    }
    
}