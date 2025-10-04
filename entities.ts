export interface Locations {
    locationId: number
    locationName: string
    locationAdress: string
    locationLatLng: number[];
    manager?:any
    region?:any
    employees: Employee[]
}

export interface Employee {
    employeeId:string
    employeeName:string
    employeeLastName: string
    employeePhoneNumber:string
    employeeEmail: string
    employeePhoto?: string
    location?: Location
    user?: any
}