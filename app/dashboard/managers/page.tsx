import { API_URL } from "@/constants";
import { Locations } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import FormCreateManager from "./components/FormCreateManager";

const ManagersPage = async () => {
    const resStores = await fetch(`${API_URL}/locations`, {
        headers: { ...authHeaders() }
    });
    const stores: Locations[] = await resStores.json()
    return (
        <FormCreateManager stores={stores} />
    )
}

export default ManagersPage;