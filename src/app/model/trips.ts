export interface ITrips {
  id: number,
  trip_no: string,
  trip_type: string,
  trip_date: any,
  driver: string,
  rider: string,
  actual_amount: string,
  rounding_amount: string,
  vehicle_type: string,
  trip_status: string,
  payment_mode: string,
  past: string,
  isViewable?: boolean
}