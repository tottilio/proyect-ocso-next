import EmployeesLocation from "./@locations/_components/EmployeesLocation";

const DaashboardPage = ({searchParams}: {searchParams: {[key: string]: string | string[] | undefined  }}) => {
    return (
        <>
            <div className="h-full w-4/12 bg-red-100">
            <div className="h-[90vh] overflow-hidden overflow-y-auto first:mt-0 last:mb-0">
                {
                    searchParams.store 
                    ? 
                    <EmployeesLocation store={searchParams?.store} />
                    :
                    <p className="w-full text-2x1  px-2 text-center mt-10">
                        Selecciona para ver los empleados
                    </p>
                }
            </div>
            </div>
        </>
    );
}

export default DaashboardPage;