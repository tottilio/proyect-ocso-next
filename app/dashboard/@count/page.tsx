import axios from "axios";

const CountPage = async () => {

    const countLocation = await axios.get("http://localhost:4000/locations")
    return (
        "Hay tantas locations: " + countLocation?.data?.length
    );
}
 
export default CountPage;