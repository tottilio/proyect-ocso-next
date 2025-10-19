import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";


const ProviderCard = ({provider}: {provider:Provider}) => {
    return (
        <Card >
            <CardHeader>{provider.providerName}</CardHeader>
            <Divider/>
            <CardBody>
                <p>Correo electrónico:</p>
                 <b>{provider.providerEmail}</b>
                <p>Numero telefonico: </p>
                <b>{provider.providerPhoneNumber}</b>
                <p><b>{provider.products ? (
                    <p>Tiene<b> {provider.products.length} </b>productos</p>
                )
                :
                <p>No tiene productos</p>}</b></p>
                <p><b>{}</b></p>
            </CardBody>
        </Card>
    );
}
 
export default ProviderCard;