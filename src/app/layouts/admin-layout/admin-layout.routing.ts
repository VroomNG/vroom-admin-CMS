import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AdminAddComponent } from 'src/app/pages/admin-add/admin-add.component';
import { AdminViewComponent } from 'src/app/pages/admin-view/admin-view.component';
import { AdminViewAccessComponent } from 'src/app/pages/admin-view-access/admin-view-access.component';

import { VehicleAddComponent } from 'src/app/pages/vehicle-add/vehicle-add.component';
import { VehicleTypeComponent } from 'src/app/pages/vehicle-type/vehicle-type.component';

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

import { SettlementsComponent } from 'src/app/pages/settlements/settlements.component';
import { SettlementsPartnerWithdrawRequestsComponent } from 'src/app/pages/settlements-partner-withdraw-requests/settlements-partner-withdraw-requests.component';
import { SettlementsWithdrawDetailsComponent } from 'src/app/pages/settlements-withdraw-details/settlements-withdraw-details.component';
import { SettlementsWithdrawRequestComponent } from 'src/app/pages/settlements-withdraw-request/settlements-withdraw-request.component';

import { RatingsDriverComponent } from '../../pages/ratings-driver/ratings-driver.component';
import { RatingsRiderComponent } from '../../pages/ratings-rider/ratings-rider.component';
import { NotifyAddComponent } from '../../pages/notify-add/notify-add.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { MessageAddComponent } from '../../pages/message-add/message-add.component';
import { MessagesComponent } from '../../pages/messages/messages.component';
import { ReportsComponent } from '../../pages/reports/reports.component';
import { ReportsRefComponent } from '../../pages/reports-ref/reports-ref.component';
import { SurgeChargeComponent } from '../../pages/surge-charge/surge-charge.component';
import { SurgeAddComponent } from '../../pages/surge-add/surge-add.component';
import { DiscountComponent } from '../../pages/discount/discount.component';
import { DiscountAddComponent } from '../../pages/discount-add/discount-add.component';
import { DiscountCodeUseComponent } from '../../pages/discount-code-use/discount-code-use.component';
import { AppActionUninstallComponent } from '../../pages/app-action-uninstall/app-action-uninstall.component';
import { AppActionDriverVisibilityComponent } from '../../pages/app-action-driver-visibility/app-action-driver-visibility.component';
import { AppActionDriverSettingsComponent } from '../../pages/app-action-driver-settings/app-action-driver-settings.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'add-admin',      component: AdminAddComponent },
    { path: 'view-admin',      component: AdminViewComponent },
    { path: 'view-access-trail',      component: AdminViewAccessComponent },
    { path: 'view-vehicle', component: VehicleTypeComponent },
    { path: 'add-vehicle', component: VehicleAddComponent},
    { path: 'view-partners', component: PartnersComponent},
    { path: 'add-partners', component: PartnersAddComponent},
    { path: 'add-drivers', component: DriversAddComponent},
    { path: 'approved-drivers', component: DriversApprovedComponent},
    { path: 'unapproved-drivers', component: DriversPendingComponent},
    { path: 'rejected-drivers', component: DriversRejectedComponent},
    { path: 'add-riders', component: RidersAddComponent},
    { path: 'view-riders', component: RidersComponent},
    { path: 'trips', component: TripsComponent},
    { path: 'upcoming-trips', component: TripsUpcomingComponent},
    { path: 'past-trips', component: TripsPastComponent},
    { path: 'trips-settings', component: TripsSettingsComponent},
    { path: 'cash-settlements', component: SettlementsComponent},
    { path: 'partner-settlements', component: SettlementsPartnerWithdrawRequestsComponent},
    { path: 'withdrawal-details', component: SettlementsWithdrawDetailsComponent},
    { path: 'withdrawal-request', component: SettlementsWithdrawRequestComponent},
    { path: 'driver-ratings', component: RatingsDriverComponent},
    { path: 'rider-ratings', component: RatingsRiderComponent},
    { path: 'add-notification', component: NotifyAddComponent},
    { path: 'notifications', component: NotificationsComponent},
    { path: 'new-message', component: MessageAddComponent},
    { path: 'messages', component: MessagesComponent},
    { path: 'reports', component: ReportsComponent},
    { path: 'reports-ref', component: ReportsRefComponent},
    { path: 'add-charge', component: SurgeAddComponent},
    { path: 'view-edit-charge', component: SurgeChargeComponent},
    { path: 'add-discount', component: DiscountAddComponent},
    { path: 'view-discount', component: DiscountComponent},
    { path: 'view-code-use', component: DiscountCodeUseComponent},
    { path: 'uninstalls', component: AppActionUninstallComponent},
    { path: 'driver-visibility-history', component: AppActionDriverVisibilityComponent},
    { path: 'manage-settings', component: AppActionDriverSettingsComponent},
    
];
