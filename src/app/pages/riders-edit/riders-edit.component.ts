import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RiderService } from 'src/app/service/riders.service';

interface City {
  name: string;
  // code: string;
}

@Component({
  selector: 'app-riders-edit',
  templateUrl: './riders-edit.component.html',
  styleUrls: ['./riders-edit.component.scss']
})
export class RidersEditComponent implements OnInit {

  riderId: any;
  riders: [] | any;

  cities!: City[] |  undefined;

  showAlert:boolean = false;
  alertMsg = 'Updating user ...';
  alertColor = 'primary';

  constructor(
    private Rider: RiderService,
    private route: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(){ 
   this.riderId = this.route.snapshot.paramMap.get('id');
   console.log(this.riderId)
   this.Rider.getSingleRider(this.riderId).subscribe(
     (res:any)=>{
       console.log(res)
       this.riders = res.data
       console.log(this.riders)
     }
   )

  }

  update() {
    this.showAlert = true;
    var editRiderForm = {
      firstname: this.riders.firstname,
      lastname: this.riders.lastname,
      // email: this.riders.email,
      phone_no: this.riders.Phone_no,
      // password: this.riders.password,
      city: this.riders.city,
      // user_type: this.riders.user_type,
    }
  
    console.log(editRiderForm)
    this.Rider.updateRider(editRiderForm, this.riderId).subscribe({
      next: (res:any) => {
        console.log(res)
        if(res.code === 200){
        this.alertMsg = res.message
        this.alertColor = 'success'
      }else {
        this.alertMsg = res.message
        this.alertColor = 'danger'
      }
      }
    })
   
  }
  
  deleteRider() {
      window.alert('are you sure?');
      const riderId = this.riderId;
        this.Rider.deleteRider(riderId).subscribe((res:any) => {
          console.log(res);
  
          const response = res.data;
          if(res.code == 200){
           this.alertMsg = res.message
           this.alertColor = 'success'
            this.router.navigate(['/dashboard']);
          } else {
            this.alertMsg = res.message
           this.alertColor = 'success'
          }
  
        })
    
    }
  

}
