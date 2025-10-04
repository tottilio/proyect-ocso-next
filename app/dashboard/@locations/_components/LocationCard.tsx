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
        <Card>
            <CardHeader>
                <b className="w-full">{data.locationName}</b>
            </CardHeader>
                <Divider />
            <CardBody>
                <p className="w-full">
                    Manager: 
                    <Link href={{pathname: `/dashboard/managers`}}> 
                        <b>{data.manager?.[0]?.managerFullName}</b> 
                    </Link> 
                </p>
            </CardBody>
        </Card>
    );
}

export default LocationCard;