import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AdminAddComponent } from 'src/app/pages/admin-add/admin-add.component';
import { AdminViewComponent } from 'src/app/pages/admin-view/admin-view.component';
import { AdminViewAccessComponent } from 'src/app/pages/admin-view-access/admin-view-access.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'add-admin',      component: AdminAddComponent },
    { path: 'view-admin',      component: AdminViewComponent },
    { path: 'view-access-trail',      component: AdminViewAccessComponent },
];
