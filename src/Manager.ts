import { Employee } from "./Employee";
import { EmployeeType } from "./EmployeeType";

export class Manager{
    employeeNeed=false;

    public needAnyEmployee():Employee{
      const newEmp = new Employee('varathan',2,EmployeeType.Backend)
      return newEmp;
    }

}