export interface IAdmin {
      id: number
      email: string
      firstname: string
      lastname: any,
      phone_no: any,
      user_type: any,
      ref_code: string
    }
    
    export interface IAccessTrail {
      ID: number
      login: string
      action: string
      access_time: string
    }
    
