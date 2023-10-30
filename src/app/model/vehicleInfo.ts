export class IVehicleInfo {
    id!: number;
    type: any;
    trip_type: any;
    per_km_rate: any;
    per_minute_rate: any;
    minimum_fare: any;
    commission: any;
    available_seat: any;
    base_fare: any;
    tolls_fees: any;
    // rate_per_minute:any;
    levy: any;
    cancel_charge_driver: any;
    cancel_charge_rider: any;
    isactive!: boolean;
    // description: any;

    // peek_hour_fare: any;
    // make:any;
    // model:any;
    // year:any;
    // tax_percent:any;
    per_km_rate_share:any;
    per_minute_rate_share:any;
    minimum_fare_share:any;
    base_fare_share:any;
    promo_amount:any;
    promo_status:any;
    isEditable!: true;
}