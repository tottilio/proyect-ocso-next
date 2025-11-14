import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import EmployeePhotoCard from "./_components/EmployeePhotoCard";
import EmployeeCard from "./_components/EmployeeCard";

const EmployeePage = async () => {
 
    const res = await fetch(`${API_URL}/employees`, {
            headers: { ...authHeaders() },
            next: {tags: ["dashboard:employees"]}
        })
    
        const employees: Employee[] = await res.json()

    return (
        <div >
            {employees?.map((employee: Employee) => {
                if(employee.employeePhoto !== null){
                    return <EmployeePhotoCard key={employee.employeeId} employee={employee}/>
                } else {
                    return <EmployeeCard key={employee.employeeId} employee={employee}/>
                }
                
            })|| null}
        </div>
    );
}
 
export default EmployeePage; 