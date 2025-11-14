'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

const createEmployee = async (formData: FormData) => {
    let employee: any = {}
    for(const key of formData.keys()){
        employee[key] = formData.get(key)
    }
    const res = await fetch(`${API_URL}/employees`, {
        method: 'POST',
        body: JSON.stringify(employee),
        headers:{...authHeaders(), 'Content-type': 'application/json' }
    })

    if ( res.status === 201) revalidateTag("dashboard:employees")

}

export default createEmployee;