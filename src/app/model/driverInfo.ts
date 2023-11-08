
export interface IApproved {
    id:number,
    code:string,
    name:string,
    city: string
    vehicle_type:string,
    email:string,
    phone:string,
    registered_on:Date,
    wallet:number,
    isEditable: boolean,
    isNotify: boolean
}

export interface IRatings_Drivers {
    id:number,
    trip_no: string,
    driver: string,
    rating: number,
    comments: string,
    phone: string,
    review_date: string,
    canDelete?: boolean,
}
export interface IRatings_Riders {
    id:number,
    trip_no: string,
    rider: string,
    rating: number,
    comments: string,
    phone: string,
    review_date: string,
    canDelete?: boolean,
}


export interface IApproved_Drivers {
        id: number
        firstname: string
        lastname: string
        profile_url: string
        phone_no: string
        city: string
        balance: number
        email: string
        make: string
        model: string
        vehicle_type: string
        current_status: string
        driver_status: number
        is_active: number
        is_online: string
        created_at: string
        last_tripDate: string    
}