import { Input } from "@heroui/react";
import {createLocation} from '@/actions/locations/create';
import SelectManager from "./SelectManagers";
import { TOKEN_NAME, API_URL } from "@/constants";
import { cookies } from "next/headers";
import axios from "axios";

const FormNnewLocation = async () => {
    const token = cookies().get(TOKEN_NAME)?.value;
    const { data } = await axios.get(`${API_URL}/managers`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return (
        <form action={createLocation}>
            <Input label="Nombre" name="locationName" />
            <Input label="Dirección" name="locationAddres" />
            <Input label="Latitud" name="locationLat" />
            <Input label="Longitud" name="locationLong" />
            <SelectManager managers={data} />
            <button> Subir </button>
        </form>
    );
}
 
export default FormNnewLocation;