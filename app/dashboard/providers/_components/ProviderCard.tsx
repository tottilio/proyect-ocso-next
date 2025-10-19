import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";


const ProviderCard = ({ provider }: { provider: Provider }) => {
    return (
        <Card className="w-full min-w-[350px]" >
            <CardHeader>{provider.providerName}</CardHeader>
            <Divider />
            <CardBody>
                <p>Correo electrónico:</p>
                <b>{provider.providerEmail}</b>
                <p>Numero telefonico: </p>
                <b>{provider.providerPhoneNumber}</b>
                <p><b>
                    {provider.products.length !== 0 ? (
                    <p>
                        Tiene<b> {provider.products.length} </b>producto{provider.products.length > 1 ? "s" : ""}
                    </p>
                )
                    :
                    <p>No tiene productos</p>}</b></p>
                <p><b>{ }</b></p>
            </CardBody>
        </Card>
    );
}

export default ProviderCard;