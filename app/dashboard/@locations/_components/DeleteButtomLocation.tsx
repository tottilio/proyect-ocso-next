import deleteLocation from "@/actions/locations/delete";
import { Button } from "@heroui/react";

const DeleteButtonlocation = ({store}: {store: string | string[] | undefined  }) => {
    if(!store) return null
    return (
        <form action={deleteLocation} className="my-4">
            <Button type="submit" name="deleteValue" value={Array.isArray(store) ? store.join(",") : store} className="bg-red-500 text-white p-3 rounded-md">Borrar tienda</Button>
        </form>
    );
}
 
export default DeleteButtonlocation;