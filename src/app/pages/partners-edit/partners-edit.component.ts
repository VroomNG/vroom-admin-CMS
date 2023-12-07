import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartnerService } from 'src/app/service/partners.service';
import { IPartners } from 'src/app/model/partners';

interface City {
  name: string;
  // code: string;
}

@Component({
  selector: 'app-partners-edit',
  templateUrl: './partners-edit.component.html',
  styleUrls: ['./partners-edit.component.scss']
})
export class PartnersEditComponent implements OnInit {

  partners!: any;
  partnerId: any;

  cities!: City[] |  undefined;

  showAlert:boolean = false;
  alertMsg = 'Updating user ...';
  alertColor = 'primary';

  constructor(
    private route: ActivatedRoute,
    private Partner: PartnerService,
    private router:Router,
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
  // this.userType = [
  //   { type: 'Super Admin', code: '4' },
  //   { type: 'Sub Admin', code: '3' },
  //   { type: 'Partner', code: '5' },
  // ];
  this.partnerId = this.route.snapshot.paramMap.get('id')
  console.log(this.partnerId)
  this.Partner.getSinglePartners(this.partnerId).subscribe(
    (res:any)=>{
      console.log(res)
      this.partners = res.data
      console.log(this.partners)
    }
  )
}

update() {
  this.showAlert = true;
  var editPartnerForm = {
    firstname: this.partners.firstname,
    lastname: this.partners.lastname,
    email: this.partners.email,
    phone_no: this.partners.Phone_no,
    password: this.partners.password,
    city: this.partners.city,
    user_type: this.partners.user_type,
  }

  console.log(editPartnerForm)
  this.Partner.updatePartner(editPartnerForm, this.partnerId).subscribe({
    next: (res:any) => {
      console.log(res)
      if(res.code === 200){
      this.alertMsg = 'User Updated',
      this.alertColor = 'success'
    }else {
      this.alertMsg = 'Update failed!! ERROR WITH SERVER',
      this.alertColor = 'danger'
    }
    }
  })
 
}

deletePartner() {
    window.alert('are you sure?');
    const partnerId = this.partnerId;
    // console.log(adminId)
    // this.displayDialog = true;

      this.Partner.deletePartner(partnerId).subscribe((res:any) => {
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
