
// export interface Country {
//     name?: string;
//     code?: string;
// }

// export interface Representative {
//     name?: string;
//     image?: string;
// }

export interface IAdmins {
      id:number,
      name: string,
      lastName: string, 
      email: string,
      phone: number,
      adminType: string,
      isEditable: boolean, 
}

export interface IAdminsTrail {
      id:number,
      name: string,
      email: string,
      action: string,
      time:   Date,
      isEditable: boolean, 
}
