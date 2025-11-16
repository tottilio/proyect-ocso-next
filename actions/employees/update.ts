'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

const updateEmployee = async (employeeId: string,formData: FormData) => {
    const cleanData = new FormData();
    for(const [key, value] of formData.entries()){
        if (key.startsWith("$")) {
            cleanData.append(key,value)
        }
    }
    const res = await fetch(`${API_URL}/employees/${employeeId}`, {
        method: 'PATCH',
        body: cleanData,
        headers:{...authHeaders() },
    })

    if ( res.status === 200) revalidateTag("dashboard:employees")
    if ( res.status === 200) revalidateTag(`dashboard:employees:${employeeId}`)

}

export default updateEmployee;