import { Button, Input } from "@heroui/react";
import SelectStore from "../[id]/_componetns/SelectStore";
import { Locations } from "@/entities";
import createManager from "@/actions/managers/create";

const FormCreateManager = async ({stores} : {stores: Locations[]}) => {
    return (
        <form action={createManager} className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-white">Crear Manager</h1>
            <Input label="Nombre completo" name="managerFullName" />
            <Input label="Salario" name="managerSalary" />
            <Input label="Correo" name="managerEmail" />
            <Input label="Num. de telefono" name="managerPhoneNumber" />
            <SelectStore stores={stores}/>
            <Button className="bg-blue-600" type="submit">Crear anager</Button>
        </form> 
    );
}
 
export default FormCreateManager;