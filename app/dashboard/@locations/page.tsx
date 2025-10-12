import { API_URL } from '@/constants'
import { Locations } from "@/entities";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import FormNnewLocation from "./_components/FormNnewLocation";
import DeleteButtonlocation from "./_components/DeleteButtomLocation";
import { authHeaders } from "@/helpers/authHeaders";


const LocationsPage = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {

    const res = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:locations"]
        }
    })
    let data:Locations[] = await res.json()
    
    data = [
        {
            locationId: 0,
            locationName: "Ninguna",
            locationLatLng: [0, 0],
            locationAdress: "No existe",
            manager: [],
            employees: []
        },
        ...data
    ]

    return (
        <div className="w-8/12">
            <div className="w-full h-[90vh] bg-red-50 flex flex-col items-center">
                <div className="w-1/2 my-10">
                    <SelectLocation locations={data} store={searchParams?.store} />
                </div>
                <div className="w-8/12">
                    <LocationCard store={searchParams.store} />
                </div>
                <div className="w-6/12">
                    <FormNnewLocation searchParams={searchParams} />
                </div>
                <DeleteButtonlocation store={searchParams.store} />
            </div>
        </div>
    );
}

export default LocationsPage;