import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AdminAddComponent } from 'src/app/pages/admin-add/admin-add.component';
// import { ViewAdminComponent } from 'src/app/pages/admin/view-admin/view-admin.component';
// import { AddAdminComponent } from 'src/app/pages/admin/add-admin/add-admin.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'add-admin',      component: AdminAddComponent },
    // { path: 'admin/add-admin', component: AddAdminComponent },
];
