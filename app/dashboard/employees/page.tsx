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
        <div className="flex flex-wrap flex-grow-0 h-[90vh] gap-4 overflow-y-auto p-10 ">
            {employees.map((employee: Employee) => {
                if(employee.employeePhoto !== null){
                    return <EmployeePhotoCard key={employee.employeeId} employee={employee}/>
                } else {
                    return <EmployeeCard key={employee.employeeId} employee={employee}/>
                }
            })}
        </div>
    );
}
 
export default EmployeePage; 