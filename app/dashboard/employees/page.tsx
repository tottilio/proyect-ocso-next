import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import EmployeeCard from "./_components/EmployeeCard";

const EmployeePage = async () => {
 
    const res = await fetch(`${API_URL}/employees`, {
            headers: { ...authHeaders() },
        })
    
        const employees: Employee[] = await res.json()

    return (
        <div>
            {employees.map((employee: Employee) => {
                return <EmployeeCard key={employee.employeeId} employee={employee}/>
            })}
        </div>
    );
}
 
export default EmployeePage; 