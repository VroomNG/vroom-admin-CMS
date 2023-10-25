import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComponentsModule } from './components/components.module';
// import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    // SidebarComponent,
    DropdownComponent,
    DashboardComponent,
    // FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    // ButtonModule
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
