import deleteProvider from "@/actions/providers/delete";
import { LuTrash } from "react-icons/lu";

const DeleteButton = ({providerId}: {providerId:string}) => {

    const actionDeteleprovider = deleteProvider.bind(null, providerId);

    return (
        <form action={actionDeteleprovider} className="flex">
            <button className="bg-red-500 text-white py-3 px-8 rounded-md" type="submit" ><LuTrash size="20" /></button>
        </form>
    );
}
 
export default DeleteButton;