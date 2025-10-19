'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

const createManager = async (formData: FormData) => {
    let manager: any = {}
    for(const key of formData.keys()){
        manager[key] = formData.get(key)
    }
    const res = await fetch(`${API_URL}/managers`, {
        method: 'POST',
        body: JSON.stringify(manager),
        headers:{...authHeaders()}
    })

    if ( res.status === 201) revalidateTag("dashboard:managers")

}

export default createManager;