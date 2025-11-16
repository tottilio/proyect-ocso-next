import createEmployee from "@/actions/employees/create";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@heroui/react";
import { json } from "stream/consumers";
import SelectLocations from "./SelectEmployee";

const FormCreateEployees = async () => {
    const resLocations = await fetch(`${API_URL}/locations`, {
        headers:{...authHeaders()},
    })
    const locations = await resLocations.json()
    return ( 
        <form action={createEmployee} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit">
            <Input isRequired={true} label="Nombre" name="employeeName"  placeholder="Marco" />
            <Input isRequired={true} label="Apellidos" name="employeeLastName" placeholder="Aurelio" />
            <Input isRequired={true} label="Correo" name="employeeEmail" placeholder="marco@marco.com" />
            <Input isRequired={true} label="Num. de telefono" name="employeePhoneNumber" placeholder="444xxxxxxx" />
            <Input label="Foto" name="employeePhoto" type="file"/>
            <SelectLocations stores={locations}  />
            <Button type="submit" className="bg-blue-600" >Crear usuario</Button>
        </form>
    );
}
 
export default FormCreateEployees;