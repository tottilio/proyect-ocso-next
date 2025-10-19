'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

const updateManager = async (managerId:string,formData: FormData) => {
    let manager: any = {}
    for(const key of formData.keys()){
        manager[key] = formData.get(key)
    }
    const res = await fetch(`${API_URL}/managers/${managerId}`, {
        method: "PATCH",
        body: JSON.stringify(manager),
        headers:{...authHeaders()}
    })

    if ( res.status === 200) {
        revalidateTag("dashboard:managers")
        revalidateTag(`dashboard:managers:${managerId}`)
}

export default updateManager;