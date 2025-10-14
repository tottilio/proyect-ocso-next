import { Input } from "@heroui/react";
import SelectManager from "./SelectManagers";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Locations, Managers } from "@/entities";
import { updateLocation } from "@/actions/locations/update";

const FormUpdateLocation = async ({store}: {store: string | string[] | undefined  }) => {
    if(!store || store === undefined || typeof store === 'object') return null
    const updateWhitStoreId = updateLocation.bind(null, store)
    const responseManagers = await fetch(`${API_URL}/managers`,{
        headers:{
            ...authHeaders(),
        },
        credentials: 'include',
        next: {
            tags: ["dashboard:managers"]
        }
    })
    const dataManagers: Managers[] = await responseManagers.json()

    
    const responseLocation = await fetch(`${API_URL}/locations`, {
        headers:{
            ...authHeaders()
        },
        credentials:'include',
        next:{
            tags: ["dashboard:locations"]
        }
    })
    const dataLocations: Locations[] = await responseLocation.json() 
    let foundLocation = dataLocations.find((location) => location.locationId === +store)
    let foundManager = dataManagers.find((manager) => manager.managerId === foundLocation?.manager.managerId)
    
    return (
        <form action={updateWhitStoreId} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center">Crear Tienda</h1>
            <Input defaultValue={foundLocation?.locationId?.toString() ?? ""} label="Nombre" placeholder="Ocso juriquilla" name="locationName" />
            <Input defaultValue={foundLocation?.locationAdress?.toString() ?? ""} label="Dirección" placeholder="Av. de la luz #120"name="locationAddress" />
            <Input defaultValue={foundLocation?.locationLatLng[0]?.toString() ?? ""} label="Latitud" placeholder="-129" name="locationLat" />
            <Input defaultValue={foundLocation?.locationLatLng[1]?.toString() ?? ""} label="Longitud" placeholder="304" name="locationLong" />
            <SelectManager defaultManager={foundManager?.managerId} managers={dataManagers} locations={dataLocations} />
            <button type="submit" className="bg-orange-300 p-3 rounded-md hover:bg-blue-600 hover:text-white transition-all">Actualizar</button>
        </form>
    );
}
 
export default FormUpdateLocation;