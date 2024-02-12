import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterValidators } from '../../helpers/validators/register-validators'
// import { EmailTaken } from '../../helpers/validators/email-taken';
import { AdminService } from 'src/app/service/admin.service';
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
  selector: 'app-admin-addquest',
  templateUrl: './admin-addquest.component.html',
  styleUrls: ['./admin-addquest.component.scss']
})

export class AdminAddQuestComponent implements OnInit {

  inSubmission = false; 

  cities!: City[] |  undefined;
  userType!: Users[] |  undefined;
  userDetails:any
  
  showAlert = false;
  alertMsg = 'please wait your account is being created';
  alertColor = 'primary';

  constructor(
    private users: UsersService,
     private Admin: AdminService
    ){ }

  onSubmit(){
    if(this.questForm.valid) {
     window.alert('admin added')
    }
  }
  ngOnInit(){
    this.userType = [
      { type: 'Badge', code: '1' },
      { type: 'Coin', code: '2' },
  ];
 
  // const userDetails = this.users.getStoredUserDetails();
  // this.userDetails = userDetails
  // this.addAccessTrail()
  console.log('init')
  }

  title = new FormControl('',[Validators.required, Validators.minLength(3)])
  subTitle = new FormControl('',[Validators.required, Validators.minLength(3)])
  description  = new FormControl('',[Validators.required, Validators.minLength(3)])
  icon = new FormControl(<any>[Validators.required, Validators.minLength(3)]);
  type = new FormControl('',[Validators.required, Validators.minLength(3)])
  points = new FormControl('',[Validators.required, Validators.minLength(1)])
  target = new FormControl('',[Validators.required, Validators.minLength(1)])
  starts = new FormControl('',[Validators.required, Validators.minLength(3)])
  expires = new FormControl('',[Validators.required, Validators.minLength(3)])
 
  
  questForm = new FormGroup({
    title: this.title,
    subTitle: this.subTitle,
    description: this.description,
    icon: this.icon,
    type: this.type,
    points: this.points,
    target: this.target,
    starts: this.starts,
    expires: this.expires
  })

  // addAccessTrail(){
  //   const {email} = this.userDetails
  //   const userCredetials = {
  //     login: email,
  //     action: 'Viewed Add Quests'
  //   }

  //   this.users.addAccesstrail(userCredetials).subscribe(
  //     (res:any)=>{
  //       const {message} = res
  //       if(message === "Success insering access"){
  //        } else {
  //        }
  //     }
  //   )
  // }

  submit(){
     console.log(this.questForm.value)

    this.showAlert = true
    setTimeout(() => {
      this.showAlert = true
      this.alertMsg = 'Adding Quest'
      this.alertColor = 'info'
      this.Admin.addQuest(this.questForm.value).subscribe(
        (res:any) => {
         console.log(res)
         if(res.code == 200){
          this.alertMsg = 'Quest Created Successfully';
          this.alertColor = "success"
         } else {
          this.alertMsg = 'something went wrong check connectivity and try again';
          this.alertColor = 'danger'
         }
         }
        
      )
      }, 1600)
  }

  reset(){
    this.questForm.reset()
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.icon.setValue(file);
  }

  
}
