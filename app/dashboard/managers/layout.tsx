import { ReactNode } from "react";
import ManagerCard from "./components/ManagerCard";

const LayoutManagers = ({ children, count }: { children: ReactNode, count: ReactNode }) => {
    return (
        <>
            <div className="w-4/12 max-h-[90vh] h-[90vh] overflow-hidden overflow-y-auto">
                <ManagerCard />
            </div>
            <div className="w-7/12 flex flex-row justify-center gap-10 items-center">
                <div>
                    {children}
                </div>
                <div>
                    {count}
                </div>
            </div>

        </>
    );
}

export default LayoutManagers;