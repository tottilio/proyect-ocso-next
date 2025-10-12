import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { Locations } from "@/entities";
import axios from "axios";
import { cookies } from "next/headers";
import { API_URL, TOKEN_NAME } from "@/constants";
import Link from "next/link";

const LocationCard = async ({ store }: { store: string | string[] | undefined }) => {
    if(!store) return null
    const token = cookies().get(TOKEN_NAME)?.value
    const { data } = await axios.get<Locations>(`${API_URL}/locations/${store}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return (
        <Card className="bg-zinc-50 p-5 rounded-md">
            <CardHeader>
                <b className="w-full text-2xl">{data.locationName}</b>
            </CardHeader>
                <Divider />
            <CardBody className="flex flex-col w-full items-center">
                <p className="w-full">
                    Manager:{" "}
                    <Link href={{pathname: `/dashboard/managers`}}> 
                        <b>{data.manager && data.manager.length > 0 ? data.manager[0].managerFullName : "Sin gerente"}</b> 
                    </Link> 
                </p>
                <p className="w-full">
                    Dirección: <b>{data.locationAdress}</b>  
                </p>
            </CardBody>
        </Card>
    );
}

export default LocationCard;