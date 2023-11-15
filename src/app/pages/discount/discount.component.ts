import { Component, OnInit } from '@angular/core';
import { IDiscount } from 'src/app/model/discountInfo';
import { DiscountService } from 'src/app/service/discount.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {

 discount: IDiscount [] = [];
 showLoader = true;

 constructor(private Discount: DiscountService){}
 ngOnInit(): void {
   this.Discount.getDiscounts().subscribe(
    (res:any)=>{
      console.log(res.data)
      this.discount = res.data;
      this.showLoader = false
    }
   )
 }

}
