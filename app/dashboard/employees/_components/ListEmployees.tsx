'use client'
import EmployeePhotoCard from "./EmployeePhotoCard";
import EmployeeCard from "./EmployeeCard";
import { Employee, Locations } from "@/entities";
import { useState } from "react";
import { Select, SelectItem } from "@heroui/react";

const ListEmployees = async ({ employees, locations }: { employees: Employee[], locations: Locations[] }) => {

    const [filter, setFilter] = useState("");

    return (
        <div className="">
            {
                locations && (
                    <Select className="w-60 pr-20 py-10" defaultSelectedKeys={[]} label="Tiendas" onChange={(e) => {
                        setFilter(e.target.value)
                    }}>
                        {locations.map((location) => {
                            return (
                                <SelectItem key={location.locationId}>{location.locationName}</SelectItem>
                            )
                        })}
                    </Select>
                )
            }
            <div className="flex flex-wrap gap-2">
                {employees?.map((employee: Employee) => {
                    if (employee.employeePhoto !== null) {
                        return <EmployeePhotoCard key={employee.employeeId} employee={employee} />
                    } else {
                        return <EmployeeCard key={employee.employeeId} employee={employee} />
                    }

                }) || null}
            </div>
        </div>
    );
}

export default ListEmployees;