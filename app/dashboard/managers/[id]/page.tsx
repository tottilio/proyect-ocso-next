import { API_URL } from "@/constants";
import { Managers } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import ManagerrCard from "./_componetns/ManagerrCard";

const ManagerPage = async ({ params }: { params: { id: string } }) => {
    const res = await fetch(`${API_URL}/managers/${params.id}`, {
        headers: { ...authHeaders() },
        next: {
            tags: [`dashboard:managers:${params.id}`, `dashboard/managers`]
        }
    });
    const data: Managers = await res.json();
    return (
        <div>
            <ManagerrCard manager={data} />
        </div>
    )
}

export default ManagerPage;