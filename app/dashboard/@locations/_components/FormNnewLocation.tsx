import { Input } from "@heroui/react";
import {createLocation} from '@/actions/locations/create';
import SelectManager from "./SelectManagers";
import { TOKEN_NAME, API_URL } from "@/constants";
import { cookies } from "next/headers";
import axios from "axios";

const FormNnewLocation = async ({searchParams}: {searchParams: {[key: string]: string | string[] | undefined  }}) => {
    if(searchParams?.store) return null;
    const token = cookies().get(TOKEN_NAME)?.value;
    const responseManagers = await axios.get(`${API_URL}/managers`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    const responseLocation = await axios.get(`${API_URL}/locations`, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center">Crear Tienda</h1>
            <Input label="Nombre" placeholder="Ocso juriquilla" name="locationName" />
            <Input label="Dirección" placeholder="Av. de la luz #120"name="locationAddress" />
            <Input label="Latitud" placeholder="-129" name="locationLat" />
            <Input label="Longitud" placeholder="304" name="locationLong" />
            <SelectManager managers={responseManagers.data} locations={responseLocation.data} />
            <button type="submit" className="bg-orange-300 p-3 rounded-md hover:bg-blue-600 hover:text-white transition-all"> Subir </button>
        </form>
    );
}
 
export default FormNnewLocation;