import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';
import { ChartModule } from 'primeng/chart';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';

import { AdminAddComponent } from 'src/app/pages/admin-add/admin-add.component';
import { AdminViewComponent } from '../../pages/admin-view/admin-view.component';
import { AdminViewAccessComponent } from 'src/app/pages/admin-view-access/admin-view-access.component';

import { VehicleTypeComponent } from '../../pages/vehicle-type/vehicle-type.component';
import { VehicleAddComponent } from '../../pages/vehicle-add/vehicle-add.component';

import {FileUploadModule} from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';

import { PartnersComponent } from '../../pages/partners/partners.component';
import { PartnersAddComponent } from '../../pages/partners-add/partners-add.component';
import { DriversAddComponent } from '../../pages/drivers-add/drivers-add.component';
import { DriversApprovedComponent } from '../../pages/drivers-approved/drivers-approved.component';
import { DriversPendingComponent } from '../../pages/drivers-pending/drivers-pending.component';
import { DriversRejectedComponent } from '../../pages/drivers-rejected/drivers-rejected.component';
import { RidersComponent } from '../../pages/riders/riders.component';
import { RidersAddComponent } from '../../pages/riders-add/riders-add.component';
import { TripsComponent } from '../../pages/trips/trips.component';
import { TripsUpcomingComponent } from '../../pages/trips-upcoming/trips-upcoming.component';
import { TripsPastComponent } from '../../pages/trips-past/trips-past.component';
import { TripsSettingsComponent } from '../../pages/trips-settings/trips-settings.component';

import { SettlementsComponent } from '../../pages/settlements/settlements.component';
import { SettlementsWithdrawRequestComponent } from '../../pages/settlements-withdraw-request/settlements-withdraw-request.component';
import { SettlementsWithdrawDetailsComponent } from '../../pages/settlements-withdraw-details/settlements-withdraw-details.component';
import { SettlementsPartnerWithdrawRequestsComponent } from '../../pages/settlements-partner-withdraw-requests/settlements-partner-withdraw-requests.component';


// import { ToastrModule } from 'ngx-toastr';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ChartModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    ToolbarModule,
    FileUploadModule,
    InputNumberModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    AdminAddComponent,
    AdminViewComponent,
    AdminViewAccessComponent,
    VehicleTypeComponent,
    VehicleAddComponent,
    PartnersComponent,
    PartnersAddComponent,
    DriversAddComponent,
    DriversApprovedComponent,
    DriversPendingComponent,
    DriversRejectedComponent,
    RidersComponent,
    RidersAddComponent,
    TripsComponent,
    TripsUpcomingComponent,
    TripsPastComponent,
    TripsSettingsComponent,
    SettlementsComponent,
    SettlementsWithdrawRequestComponent,
    SettlementsWithdrawDetailsComponent,
    SettlementsPartnerWithdrawRequestsComponent,
    
  ]
})

export class AdminLayoutModule {}
