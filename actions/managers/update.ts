'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const updateManager = async (managerId:string, formData: FormData) => {
    let manager: any = {}
    for(const key of formData.keys()){
        manager[key] = formData.get(key)
    }

    manager['managerSalary'] = +manager['managerSalary']
    manager.location = +manager.location
    if(!manager['location']) delete manager['location'];
    const res = await fetch(`${API_URL}/managers/${managerId}`, {
        method: "PATCH",
        body: JSON.stringify(manager),
        headers:{...authHeaders(), 'Content-type': "application/json"}
    })
    const data = await res .json
    if ( res.status === 200) {
        revalidateTag("dashboard:managers")
        revalidateTag(`dashboard:managers:${managerId}`)
        redirect("/dashboard/managers");
    }
}

export default updateManager;