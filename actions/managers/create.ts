'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

const createManager = async (formData: FormData) => {
    let manager: any = {}
    for(const key of formData.keys()){
        manager[key] = formData.get(key)
    }
    manager.managerSalary = +manager.managerSalary
    if(manager.location) {
        manager.location = +manager.location
    } else {
        delete manager.location
    }
    const res = await fetch(`${API_URL}/managers`, {
        method: 'POST',
        body: JSON.stringify(manager),
        headers:{...authHeaders(), 'Content-type': 'application/json'}
    })

    if ( res.status === 201) revalidateTag("dashboard:managers")

}

export default createManager;