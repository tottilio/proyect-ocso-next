import { Employee } from "@/entities";
import { Locations } from "@/entities";
import { Image } from "@heroui/react";
import Link from "next/link";

const EmployeeDataCard = ({ employee }: { employee: Employee }) => {
    return (
        <div className="flex flex-row gap-2 bg-white rounded-md flex-grow-0 h-fit px-4 py-2 m-2 items-center">
            <div className="text-xl">
                <h1 className="font-bold">{employee.employeeName + " " + employee.employeeLastName} </h1>
                <h1>{employee.employeeEmail}</h1>
                <h1>{employee.employeePhoneNumber}</h1>
                {/* <Link href={{pathname: "/dashboard", query: String(employee.location?.locationId)}} className="underline">
                    <h1>{employee.location?.locationName}</h1>
                </Link> */}
            </div>
            <div className="h-full bg-zinc-300 py-20 w-1 mx-6">
                <Image src={employee.employeePhoto} className="object-cover" classNames={{
                    img: "size-60"
                }} />
            </div>
        </div>
    );
}

export default EmployeeDataCard;