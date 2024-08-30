import { HRteam } from "./HRteam";

export class DoodleAdmin{
    
    hrTeam:HRteam = new HRteam();
    

    public startWork(){
        this.hrTeam.cube84();
        this.hrTeam.milesEducation();
    }    
    
    public newEmployeeNeeded(){
        this.hrTeam.askManagerNeedAnyEmployee();
    }
   
}