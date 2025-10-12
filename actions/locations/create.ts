'use server'
export const createLocation = async (formData: FormData) => {

    let location: any = {}
    let locationLatlong = [0, 0]
    for(const key of Array.from(formData.keys())){
        const value = formData.get(key)
        if(value){
            if(key === 'locationLat'){
                locationLatlong[0] = +value
            } else if (key === 'locationLong') {
                locationLatlong[1] = +value
            } else {
                location[key] = formData.get(key)
            }
        }
    }
    location.locationLatlong = locationLatlong
    console.log(location)

}