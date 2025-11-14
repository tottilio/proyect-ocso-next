'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const deleteEmployee = async (employeeId: string, formData: FormData) => {
    const res = await fetch(`${API_URL}/employees/${employeeId}`, {
        method: "DELETE",
        headers:{...authHeaders()}
    })

    if(res.status === 200) {
        revalidateTag("dashboard:employees")
        redirect("/dashboard/employees")
    }
}

export default deleteEmployee;