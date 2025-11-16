import { API_URL } from "@/constants";
import { Employee, Locations } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import ListEmployees from "./_components/ListEmployees";
import FormCreateEployees from "./_components/FormCreateEployees";

const EmployeePage = async () => {
// GET EMPLOYEES
    const res = await fetch(`${API_URL}/employees`, {
        headers: { ...authHeaders() },
        next: { tags: ["dashboard:employees"] }
    })
    const employees: Employee[] = await res.json()
// GET LOCATIONS
    const resLocations = await fetch(`${API_URL}/locations`, {
        headers: { ...authHeaders() },
        next: { tags: ["dashboard:locations"] }
    })
    const locations: Locations[] = await resLocations.json()

    return (
        <div className="flex flex-wrap flex-grow-0 h-[90vh] gap-4 overflow-y-auto p-10">
            <div className="absolute bottom-10 right-10">
                <FormCreateEployees />
            </div>
            <ListEmployees employees={employees} locations={locations} />
        </div>

    );
}

export default EmployeePage; 