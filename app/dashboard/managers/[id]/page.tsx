import { API_URL } from "@/constants";
import { Managers } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import ManagerrCard from "./_componetns/ManagerrCard";
import DeleteManagerButton from "./_componetns/DeleteManagerButton";

const ManagerPage = async ({ params }: { params: { id: string } }) => {
    const res = await fetch(`${API_URL}/managers/${params.id}`, {
        headers: { ...authHeaders() },
        next: {
            tags: [`dashboard:managers:${params.id}`, `dashboard/managers`]
        }
    });
    const data: Managers = await res.json();
    return (
        <div className="flex flex-col gap-10 flex-grow-0 items-center justify-center">
            <ManagerrCard manager={data} />
            <div className={'bg-white shadow-md rounded-md px-10 py-2'}>
                <DeleteManagerButton managerId={data.managerId} />
            </div>
        </div>
    )
}

export default ManagerPage;