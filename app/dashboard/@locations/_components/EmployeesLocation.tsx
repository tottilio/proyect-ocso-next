import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

const EmployeesLocation = async ({ store }: { store: string | string[] | undefined}) => {

    if(!store) return "No hay empleados"
    const res = await fetch(`${API_URL}/employees/location/${store}`, {
        method:"GET",
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:locations:employees"]
        }
    })

    const data: Employee[] = await res.json()

    return data.map((employee: Employee) => {
        const fullName = employee.employeeName + " " + employee.employeeLastName;
        return (
            <Card className="mx-10 my-10" key={employee.employeeId}>
                <CardHeader>
                    <p className="w-full">Nombre: <b>{fullName}</b></p>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <p className="w-full">Email: <b>{employee.employeeEmail}</b></p>
                    <p className="w-full">Telefono: <b>{employee.employeePhoneNumber}</b></p>
                </CardBody>
            </Card>
        )
    })
}

export default EmployeesLocation;