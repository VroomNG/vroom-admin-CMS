export interface IRiders {
    id:number,
    name:string,
    lastname:string,
    email: string
    phone:string,
    registered_on:Date,
    lastTrip:Date,
    wallet:number,
    isEditable: boolean,
    isNotify: boolean,
    isBlock: boolean
}