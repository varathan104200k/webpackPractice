import { Employee } from "./Employee";
import { EmployeeType } from "./EmployeeType";
import { Manager } from "./Manager";

export class HRteam{

    frontEnd:string[]=['jhon','nancy','king'];
    backEnd:string[]=['willams','morris','maxwell'];
    others:string[]=[];
    manager=new Manager()

    constructor(){
      
    }

    public cube84(){
        console.log('cube84 front end team '+ this.frontEnd[0] + ' 8hrs cube84')
        console.log('cube84 back end team '+ this.backEnd[0] + ' 8hrs cube84')
    }
    public milesEducation(){
        console.log('milesEducation front end team '+ this.frontEnd[2] + '8hrs milesEducation')
        console.log('milesEducation back end team '+ this.backEnd[1] + '8hrs milesEducation')
    }

    public addEmployee(emp:Employee){
        emp.empType == EmployeeType.Backend ? this.backEnd.push(emp.name)
        :  emp.empType == EmployeeType.FrontEnd ? this.frontEnd.push(emp.name)
        : this.others.push(emp.name);

        console.log(emp.name +' employee added ' + emp.empType + ' team')
    }

    public askManagerNeedAnyEmployee(){
        const emp = this.manager.needAnyEmployee();
        emp ? this.addEmployee(emp) : this.noVacancy() 
    }

    public noVacancy(){
        console.log(`we don't have vacancy sorry`)
    }

}