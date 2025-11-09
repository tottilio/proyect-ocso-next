import { Employee } from "@/entities";
import { Card, CardBody, CardHeader } from "@heroui/react";

const EmployeeCard = ({employee}: {employee: Employee}) => {
    return (
        <Card>
            <CardHeader>
                <h1 className="font-bold text-xl">{employee.employeeName + " " + employee.employeeLastName}</h1> 
            </CardHeader>
            <CardBody>
                <p>Correo:<b> {employee.employeeEmail}</b></p>
                <p>Telefono:<b> {employee.employeePhoneNumber}</b></p>
            </CardBody>
        </Card>
    );
}
 
export default EmployeeCard;