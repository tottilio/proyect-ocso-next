import deleteEmployee from "@/actions/employees/delete";
import { Button } from "@heroui/react";
import { LuTrash } from "react-icons/lu";

const DeleteEmployee = ({employeeId} : {employeeId: string}) => {
    
    const deleteEmployeeById = deleteEmployee.bind(null,employeeId);

    return (
        <form action={deleteEmployeeById}>
            <Button className="bg-red-600" type="submit">
                <LuTrash size="20" />
            </Button>
        </form>
    );
}
 
export default DeleteEmployee;