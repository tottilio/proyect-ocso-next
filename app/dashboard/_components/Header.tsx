import Image from "next/image";

const Header = () => {
    return (
        <div className="w-screen h-[10vh] bg-orange-200 flex flex-row items-center px-10">
            <Image src={'/OXXO-Logo.png'} alt="Image oxxo" width={100} height={0} draggable={false} /> 
        </div>
    );
}
 
export default Header;