import deleteLocation from "@/actions/locations/delete";
import { Button } from "@heroui/react";
import { LuTrash } from "react-icons/lu";

const DeleteButtonlocation = ({store}: {store: string | string[] | undefined  }) => {
    if(!store) return null
    return (
        <form action={deleteLocation} className="my-4">
            <Button type="submit" name="deleteValue" value={Array.isArray(store) ? store.join(",") : store} className="bg-red-500 text-white py-3 px-8 rounded-md"><LuTrash size="20" /></Button>
        </form>
    );
}
 
export default DeleteButtonlocation;