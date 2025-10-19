import { API_URL } from "@/constants";
import { Managers } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

const ManagerPage = async ({ params }: { params: { id: string } }) => {
    const res = await fetch(`${API_URL}/managers/${params.id}`, {
        headers: { ...authHeaders() },
        next:{
            tags:[`dashboard:managers:${params.id}`, `dashboard/managers` ]
        }
    });
    const data: Managers = await res.json();
    return (
        <Card className="mx-20  bg-orange-100 p-2 rounded-md  " key={data.managerId}>
            <CardHeader>
                <p className="w-full">Nombre: <b>{data.managerFullName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full">Email: <b>{data.managerEmail}</b></p>
                <p className="w-full">Telefono: <b>{data.managerPhoneNumber}</b></p>
                {data.location ? (
                    <p>Tienda: <b> {data.location.locationName}</b></p>
                ) : (<p>No tiene tienda</p>)}
            </CardBody>
        </Card>
    )
}

export default ManagerPage;