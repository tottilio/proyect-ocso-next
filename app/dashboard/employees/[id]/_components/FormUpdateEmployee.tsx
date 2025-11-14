import updateEmployee from "@/actions/employees/update";
import { Employee } from "@/entities";
import { Button, Input } from "@heroui/react";

const FormUpdateEmployee = ({employee}: {employee: Employee}) => {

    const {employeeId} = employee
    const employeeById = updateEmployee.bind(null, employeeId);

    return ( 
        <form action={employeeById} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit">
            <Input label="Nombre" name="employeeName" defaultValue={employee.employeeName} />
            <Input label="Apellidos" name="employeeLastName" defaultValue={employee.employeeLastName} />
            <Input label="Correo" name="employeeEmail" defaultValue={employee.employeeEmail} />
            <Input label="Num. de telefono" name="employeePhoneNumber"  defaultValue={employee.employeePhoneNumber} />
            <Input label="Foto" name="employeePhoto" type="file" defaultValue={employee.employeePhoto} />
            <Button type="submit" className="bg-blue-600" >Actualizar datos</Button>
        </form>
    );
}
 
export default FormUpdateEmployee;