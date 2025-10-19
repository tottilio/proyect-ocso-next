import { API_URL } from "@/constants";
import { Managers } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card } from "@heroui/react";

const CountManagerPage = async () => {

    const res = await fetch(`${API_URL}/managers`, {
        headers: {...authHeaders()},
        next:{
            tags:["dashboard:managers"]
        }
    })
    const managers:Managers[]= await res.json()
    const countNoStore = managers.filter((manager: Managers) => {
        return !manager.location
    }).length
    let max = 0;
    let salary = 0;

    managers.forEach((manager: Managers) => {
        if(manager.managerSalary > max) max = manager.managerSalary
        salary += manager.managerSalary
    })

    return (
        <Card className="w-fit px-2 py-4 text-center">
            <h1>Hay {managers.length} manager{managers.length > 1 ? "s" : ""}</h1>
            <h1>Hay {countNoStore} sin tiendas</h1>
            <h1>El salario maximo es {max} sin tiendas</h1>
            <h1>El salario promedio es {(salary/managers.length)} sin tiendas</h1>
        </Card>
    );
}
 
export default CountManagerPage;