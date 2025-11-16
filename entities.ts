export interface Locations {
    locationId: number
    locationName: string
    locationAdress: string
    locationLatLng: number[]
    manager: Managers[]
    region?: any
    employees: Employee[]
}

export interface Employee {
    employeeId: string
    employeeName: string
    employeeLastName: string
    employeePhoneNumber: string
    employeeEmail: string
    employeePhoto?: string
    location?: Locations[]
    user?: any
}

export interface Managers {
    managerId: string
    managerFullName: string
    managerSalary: number
    managerEmail: string
    managerPhoneNumber: string
    location: Locations[]
    user?: any
}

export interface Provider {
    providerId: string
    providerName: string
    providerEmail: string
    providerPhoneNumber: string
    products: Product[]
}

export interface Product {
    productId: string
    productName: string
    productPrice: number
    productSeal: number
    provider: Provider
}

export interface User{
    userEmail:string
    userPassword:string
    userRoles: string[];
    manager: Managers
    employee: Employee

}