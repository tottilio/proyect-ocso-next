import createProvider from "@/actions/providers/create";
import { Input } from "@heroui/react";

const FormCreateProvider = () => {
    return (
        <form action={createProvider} className="flex flex-col gap-2 flex-grow-0 bg-orange-300 p-3" >
            <h1 className="text-2xl text-white" >Crear Provedor</h1>
            <Input label="Nombre:" placeholder="Pecsi" name="providerName"/>
            <Input label="Correo:" placeholder="business@pecsi.com" name="providerEmail"/>
            <Input label="Numero:" placeholder="442XXXYYYY" name="providerPhoneNumber"/>
            <button className="bg-blue-500" type="submit" >Crear provedor</button>
        </form>
    );
}
 
export default FormCreateProvider;