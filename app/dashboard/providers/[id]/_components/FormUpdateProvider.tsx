import updateProvider from "@/actions/providers/update";
import { Provider } from "@/entities";
import { Input } from "@heroui/react";
import DeleteButton from "./DeleteButton";

const FormUpdateProvider = ({ provider }: { provider: Provider }) => {
    const { providerId } = provider
    const updateProviderWithId = updateProvider.bind(null, providerId);

    return (
        <div>
            {/* <h1 className="text-2xl py-2 text-center" >Actualizar datos</h1> */}
            <form action={updateProviderWithId} className="flex flex-wrap gap-4 flex-grow-0 bg-orange-200 rounded-lg items-center justify-center py-8" >
                <Input className="bg-gray-50 rounded-lg max-w-[250px]" defaultValue={provider.providerName} label="Nombre:" placeholder="Pecsi" name="providerName" />
                <Input className="bg-gray-50 rounded-lg max-w-[250px]" defaultValue={provider.providerEmail} label="Correo:" placeholder="business@pecsi.com" name="providerEmail" />
                <Input className="bg-gray-50 rounded-lg max-w-[250px]" defaultValue={provider.providerPhoneNumber} label="Numero:" placeholder="442XXXYYYY" name="providerPhoneNumber" />
                <button className="bg-blue-500 rounded-lg p-2 text-white" type="submit" >Actualizar</button>
                <DeleteButton providerId={providerId}  />
            </form>
        </div>
    );
}

export default FormUpdateProvider;