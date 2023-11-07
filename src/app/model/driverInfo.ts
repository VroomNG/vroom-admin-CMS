export class driverInfo {
    id!: number;
    user_id: any;
    email: any;
    firstname: any;
    lastname: any;
    profile_url: any;
    phone_no: any;
    supervisor:any;
    city: any;
    make: any;
    model: any;
    password: any;
    user_type:any;
    insurance_docu: any;
    // insurance: any
    holder_name: any;
    account_number : any;
    bank_name : any;
    location : any;
    payment_email : any;
    IFSC : any;
    licence_docu : any;
    // licence: any;
    licence_no: any;
    vehicle_type: any;
    vehicle_type_id:any;

    address: any;
    postal_code: any;
    about_me: any;

    other_docu:any;
    report:any;
    balance:any;

    block_reason:any;
}

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


export interface IdriverInfo {
  
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