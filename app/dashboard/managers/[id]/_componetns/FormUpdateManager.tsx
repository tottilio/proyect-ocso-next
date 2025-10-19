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
        <form action={updateManagerId} className="bg-orange-400 rounded-md" >
            <h1>Actualizar Manager</h1>
            <Input defaultValue={manager.managerFullName} placeholder="Marco Aurelio" name="managerFullName"  />
            <Input defaultValue={manager.managerEmail} placeholder="manager@ocso.com" name="managerEmail"  />
            <Input defaultValue={String(manager.managerPhoneNumber)} placeholder="manager@ocso.com" name="44228947565"  />
            <SelectStore stores={stores} defaultStore={manager?.location?.locationId} />
            <button type="submit" className="bg-blue-500" >Actualizar</button>
        </form>
    );
}
 
export default FormUpdateManager;