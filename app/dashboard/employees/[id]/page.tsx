const EmployeePage = async ({params}: {params:{id:string}}) => {

    return(
        <div>
            {params.id}
        </div>
    );
}

export default EmployeePage;