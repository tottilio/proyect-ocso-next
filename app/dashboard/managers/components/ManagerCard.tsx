
import { API_URL } from "@/constants";
import { Managers } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import Link from "next/link";

const ManagerCard = async () => {
    const res = await fetch(`${API_URL}/managers`, {
        method: "GET",
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:managers"]
        }
    })

    const data: Managers[] = await res.json()

    return data.map((manager: Managers) => {
        const fullName = manager.managerFullName;
        return (
            <Link href={{pathname: `/dashboard/managers/${manager.managerId}`}}>
                <Card className="mx-10 my-10 bg-white p-5 rounded-xl transition-all hover:scale-[110%] hover:bg-blue-100 border-gray-400 " key={manager.managerId}>
                    <CardHeader>
                        <p className="w-full">Nombre: <b>{fullName}</b></p>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p className="w-full">Email: <b>{manager.managerEmail}</b></p>
                        <p className="w-full">Telefono: <b>{manager.managerPhoneNumber}</b></p>
                    </CardBody>
                </Card>
            </Link>
        )
    })
}

export default ManagerCard;