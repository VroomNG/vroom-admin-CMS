export interface ISettlement {
    id: number,
    driver_code:string,
    driver_name: string,
    driver_email: string,
    phone: string,
    cash_settlement: string,
    latest_settlement: string,
    next_settlement: string,
    details_history: boolean,
    transction_history: boolean
}
export interface Iwithdraw_Request {
    id: number,
    driver_code:string,
    driver_name: string,
    driver_email: string,
    phone: string,
    withdrawn_amount: string,
    withdraw_date: string,
    status: string,
    details_history: boolean,
    
}