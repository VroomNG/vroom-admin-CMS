import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ModalComponent } from './modal/modal.component';
// import { TabsContainerComponent } from './tabs-container/tabs-container.component';
// import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
// import { NgxMaskModule } from 'ngx-mask';
// import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    // ModalComponent,
    // TabsContainerComponent,
    // TabComponent,
    InputComponent,

    // NgxMaskModule.forRoot()
    // AlertComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule
    // NgxMaskModule.forRoot() 
  ],
  exports: [
    // ModalComponent,
    // TabsContainerComponent,
    InputComponent,
    // TabComponent,
    // AlertComponent,
    ReactiveFormsModule,
   
  ],
})

export class SharedModule { 

}