import { Managers } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import Link from "next/link";

const ManagerrCard = ({manager}: {manager: Managers}) => {
    return (
        <Card className="mx-20  bg-orange-100 py-2 rounded-md text-center" key={manager.managerId}>
            <CardHeader>
                <p className="w-full"><b className="text-4xl">{manager.managerFullName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full">Email: <b>{manager.managerEmail}</b></p>
                <p className="w-full">Telefono: <b>{manager.managerPhoneNumber}</b></p>
                {manager.location ? (
                    <p>Tienda: <Link href={{ pathname:`/dashboard`, query: {store: manager?.location?.locationId} }}>
                        <b className="underline"> 
                            {manager.location.locationName}
                        </b>
                        </Link>
                    </p>
                ) : (<p>No tiene tienda</p>)}
            </CardBody>
        </Card>
    );
}
 
export default ManagerrCard;