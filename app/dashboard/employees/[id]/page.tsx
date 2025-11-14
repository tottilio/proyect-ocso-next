import { API_URL } from "@/constants";
import EmployeeCard from "../_components/EmployeeCard";
import { authHeaders } from "@/helpers/authHeaders";
import { Employee } from "@/entities";
import { Image } from "@heroui/react";
import FormUpdateEmployee from "./_components/FormUpdateEmployee";
import EmployeeDataCard from "./_components/EmployeeDataCard";

const EmployeePage = async ({ params }: { params: { id: string } }) => {

    const resEmployee = await fetch(`${API_URL}/employees/${params.id}`, {
        headers: { ...authHeaders() }
    });
    const employee: Employee = await resEmployee.json();

    return (
        <div className="w-full h-[90vh] flex flex-row items-center justify-center">
            <EmployeeDataCard employee={employee} />
            <FormUpdateEmployee employee={employee} />
        </div>
    );
}

export default EmployeePage;