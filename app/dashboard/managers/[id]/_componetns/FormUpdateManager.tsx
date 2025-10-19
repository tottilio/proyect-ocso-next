import updateManager from "@/actions/managers/update";
import { Managers } from "@/entities";
import { Input } from "@heroui/react";
import SelectStore from "./SelectStore";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";

const FormUpdateManager = async ({manager} : {manager: Managers}) => {

    const updateManagerId = updateManager.bind(null, manager.managerId);
    const resStores = await fetch(`${API_URL}/locations`, {
        headers: {...authHeaders()}
    })

    const stores = await resStores.json()

    return (
        <form action={updateManagerId} className="bg-orange-400 rounded-md flex flex-col flex-grow-0  gap-2" >
            <h1 className="text-2xl text-white font-semibold text-center ">Actualizar Manager</h1>
            <Input isRequired required={true} label="Nombre completo:" defaultValue={manager.managerFullName} placeholder="Marco Aurelio" name="managerFullName"  />
            <Input isRequired required={true} label="Correo electronico:" defaultValue={manager.managerEmail} placeholder="manager@ocso.com" name="managerEmail"  />
            <Input isRequired required={true} label="Salario:" defaultValue={String(manager.managerSalary)} placeholder="12000" name="managerSalary"  />
            <Input isRequired required={true} label="Numero telefonico:" defaultValue={manager.managerPhoneNumber} placeholder="4425648958" name="managerPhoneNumber"  />
            <SelectStore stores={stores} defaultStore={manager?.location?.locationId} />
            <button type="submit" className="bg-blue-500" >Actualizar</button>
        </form>
    );
}
 
export default FormUpdateManager;