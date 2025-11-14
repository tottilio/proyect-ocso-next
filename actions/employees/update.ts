'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

const updateEmployee = async (employeeId: string,formData: FormData) => {
    const res = await fetch(`${API_URL}/employees/${employeeId}`, {
        method: 'PATCH',
        body: formData,
        headers:{...authHeaders() },
    })

    if ( res.status === 200) revalidateTag("dashboard:employees")

}

export default updateEmployee;