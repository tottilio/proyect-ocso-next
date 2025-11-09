import { API_URL } from "@/constants";
import EmployeeCard from "../_components/EmployeeCard";
import { authHeaders } from "@/helpers/authHeaders";

const EmployeePage = async ({params}: {params:{id:string}}) => {

    // const employee = await fetch(`${API_URL}/employees/${params.id}`, {
    //     headers: {...authHeaders()}
    // });
    // const res = await employee.json();

    return(
        <div>
            {/* <EmployeeCard employee={res} /> */}
            {params.id}
        </div>
    );
}

export default EmployeePage;