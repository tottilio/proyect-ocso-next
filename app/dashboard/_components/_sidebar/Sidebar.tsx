import { LuStore, LuTruck, LuUser, LuUsers, LuWheat } from "react-icons/lu";
import NavItem from "./NavItem";

const Sidebar = () => {
    return (
        <nav className="w-1/12 min-w-[8.3333%] h-[90vh] bg-orange-200 flex flex-col items-center py-20 justify-center gap-10">
            <NavItem icon={<LuStore className="size-14" />} path={'/dashboard'} />
            <NavItem icon={<LuTruck className="size-14" />} path={'/dashboard/providers'} />
            <NavItem icon={<LuWheat className="size-14" />} path={'/dashboard/products'} />
            <NavItem icon={<LuUser className="size-14" />} path={'/dashboard/managers'} />
            <NavItem icon={<LuUsers className="size-14" />} path={'/dashboard/employees'} />
        </nav>
    );
}

export default Sidebar