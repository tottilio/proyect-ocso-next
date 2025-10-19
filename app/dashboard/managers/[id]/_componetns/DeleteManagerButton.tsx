import deleteManager from "@/actions/managers/delete";
import { LuTrash } from "react-icons/lu";


const DeleteManagerButton = ({managerId}: {managerId: string}) => {
    const deleteById = deleteManager.bind(null, managerId)
    return (
        <form action={deleteById}>
            <button className="bg-red-500 text-white py-3 px-8 rounded-md" type="submit" ><LuTrash size="20" /></button>
        </form>
    );
}
 
export default DeleteManagerButton;