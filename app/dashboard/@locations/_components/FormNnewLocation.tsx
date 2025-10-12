import { Input } from "@heroui/react";
import {createLocation} from '@/actions/locations/create';
import SelectManager from "./SelectManagers";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Locations, Managers } from "@/entities";

const FormNnewLocation = async ({searchParams}: {searchParams: {[key: string]: string | string[] | undefined  }}) => {
    if(searchParams?.store) return null;

    const responseManagers = await fetch(`${API_URL}/managers`,{
        headers:{
            ...authHeaders
        },
        next: {
            tags: ["dashbboard:managers"]
        }
    })
    const dataManagers: Managers[] = await responseManagers.json()

    const responseLocation = await fetch(`${API_URL}/locations`, {
        headers:{
            ...authHeaders
        },
        next:{
            tags: ["dashboard:locations"]
        }
    })
    const dataLocations: Locations[] = await responseLocation.json() 

    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center">Crear Tienda</h1>
            <Input label="Nombre" placeholder="Ocso juriquilla" name="locationName" />
            <Input label="Dirección" placeholder="Av. de la luz #120"name="locationAddress" />
            <Input label="Latitud" placeholder="-129" name="locationLat" />
            <Input label="Longitud" placeholder="304" name="locationLong" />
            <SelectManager managers={dataManagers} locations={dataLocations} />
            <button type="submit" className="bg-orange-300 p-3 rounded-md hover:bg-blue-600 hover:text-white transition-all"> Subir </button>
        </form>
    );
}
 
export default FormNnewLocation;