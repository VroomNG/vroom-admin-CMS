
export interface IVehicleType {
        id: number
        vehicle_type: string
        per_km_rate: number
        per_minute_rate: number
        base_fare: number
        tolls_fees: number
        minimum_fare: number
        commission: number
        tax_percent: number
        available_seat: number
        cancel_charge_driver: number
        cancel_charge_rider: number
        isactive: number
        description: string
        trip_type: string
        peek_hour_fare: number
        make: string
        model: string
        year: string
        vehicle_image: any
        per_km_rate_share: number
        per_minute_rate_share: number
        minimum_fare_share: number
        base_fare_share: number
        promo_status: number
        max_fare_value: number
}