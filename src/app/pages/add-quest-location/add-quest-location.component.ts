import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
// import { IAdmin, IQuest } from 'src/app/model/admins';
import { UsersService } from 'src/app/service/users.service';

interface City {
  name: string;
  // code: string;
}
interface Users {
  type: string;
  code: string;
}

@Component({
  selector: 'add-quest-location',
  templateUrl: 'add-quest-location.component.html',
  styleUrls: ['add-quest-location.component.scss']
})
export class AddQuestLocationComponent implements OnInit {

  credentials = {

    point: '',
    location:'',
    latitude: '',
    longitude: '',
  }
  
  inSubmission = false; 

  cities!: City[] |  undefined;
  userType!: Users[] |  undefined;

  quest!: any;
  questId!: any;
  userDetails:any

  showAlert:boolean = false;
  alertMsg = 'please wait your account is being created';
  alertColor = 'primary';

  constructor(
    private route: ActivatedRoute,
    private admin: AdminService,
    private router:Router,
    private users: UsersService
    ){
  }
  ngOnInit() { 
    this.cities = [
      { name: 'Abia' },
      { name: 'Enugu' },
      { name: 'Bauchi' },
      { name: 'Calabar' },
      { name: 'Uyo' },
      { name: 'Port Harcourt' },
      { name: 'Abuja' },
      { name: 'Lagos'},
  ];
  this.userType = [
    { type: 'Super Admin', code: '4' },
    { type: 'Sub Admin', code: '3' },
    { type: 'Partner', code: '5' },
  ];
  
  this.questId = this.route.snapshot.paramMap.get('id')
  console.log(this.questId)
  this.admin.getSingleQuest(this.questId).subscribe(
    (res:any)=>{
      console.log(res)
      this.quest = res.data.quest
      console.log(this.quest.location)
      console.log(res.data.quest)
    }
  )
  const userDetails = this.users.getStoredUserDetails();
  this.userDetails = userDetails
  // console.log('view admin', email)
  this.addAccessTrail()

  }

  // quest_id = new FormControl('1',[Validators.required, Validators.minLength(1)])
  // location = new FormControl('nigeria',[Validators.required, Validators.minLength(3)])
  latitude = new FormControl('111',[Validators.required, Validators.minLength(3)])
  longitude = new FormControl('11',[Validators.required, Validators.minLength(3)])
  // point = new FormControl('10',[Validators.required, Validators.minLength(3)])


  addAccessTrail(){
    const {email} = this.userDetails
    console.log(email)

    const userCredetials = {
      login: email,
      action: 'Viewed Edit Admin'
    }

    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        // console.log(res)
        const {message} = res
        if(message === "Success insering access"){
        //  console.log('access trail added')
         } else {
        // console.log('not added')
         }
      }
    )
  }

  addLocation(){
    var locationForm = {
      quest_id: this.questId,
      location: this.credentials.location,
      latitude: this.latitude,
      longitude: this.longitude,
      point: this.credentials.point
    }
    console.log(locationForm)
  }

  updateAdmin() {

   this.showAlert = true;

    // var editAdminForm = {
    //   firstname: this.admins.firstname,
    //   lastname: this.admins.lastname,
    //   // email: this.admins.email,
    //   phone_no: this.admins.Phone_no,
    //   // password: this.admins.password,
    //   city: this.admins.city,
    //   user_type: this.admins.user_type,
    // }

    // console.log(editAdminForm)
    // this.admin.updateAdmin(editAdminForm, this.questId).subscribe({
    //   next: (res:any) => {
    //  if(res.code === 200){
    //   this.alertMsg = 'User Updated',
    //   this.alertColor = 'success'
    //  } else {
    //   this.alertMsg = 'Update failed!!, ERROR from Server ',
    //   this.alertColor = 'danger'
    //  }
    //   }
    // })
   
  }

  deleteAdmin() {
      window.alert('are you sure?');
      const adminId = this.questId;
      console.log(adminId)
      // this.displayDialog = true;
  
        this.admin.deleteAdmin(adminId).subscribe((res:any) => {
          console.log(res);
          const response = res.data;

          if(res.code == 200){
            window.alert('successfully deleted')
            this.router.navigate(['/dashboard']);
          } else {
            window.alert('failed to delete user')
          }
        })
    
    }

}
