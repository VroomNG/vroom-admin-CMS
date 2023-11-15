import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/service/action.service';
import { IUninstall } from 'src/app/model/actions';

@Component({
  selector: 'app-app-action-uninstall',
  templateUrl: './app-action-uninstall.component.html',
  styleUrls: ['./app-action-uninstall.component.scss']
})
export class AppActionUninstallComponent implements OnInit {

  uninstalls: IUninstall [] = [];
  showLoader = true;
  constructor(private AppActions: ActionService){}

  ngOnInit(): void {
    this.AppActions.getAppUninstalls().subscribe(
      (res:any)=> {
        console.log(res.data);
        this.uninstalls = res.data;
        this.showLoader = false;
      }
    )
  }


}
