'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

const createEmployee = async (formData: FormData) => {
    // let employee: any = {}
    // for(const key of formData.keys()){
    //     employee[key] = formData.get(key)
    // }
    formData.delete("$ACTION_REF_0")
    formData.delete("$ACTION_0:1")
    formData.delete("$ACTION_0:0")
    const res = await fetch(`${API_URL}/employees`, {
        method: 'POST',
        body: formData,
        headers:{...authHeaders() }
    })

    if ( res.status === 201) revalidateTag("dashboard:employees")

}

export default createEmployee;