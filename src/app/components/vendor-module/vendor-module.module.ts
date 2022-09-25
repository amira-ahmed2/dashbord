import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { RouterModule,Routes } from '@angular/router';
import { SubvendorlayoutComponent } from './subvendorlayout/subvendorlayout.component';
import { SubheadervendorComponent } from './subheadervendor/subheadervendor.component';
import { SubsidebarvendorComponent } from './subsidebarvendor/subsidebarvendor.component';

const routes: Routes = [
  {path:'',redirectTo:'/vendors/vendorslist',pathMatch:'full'},
      {path:'vendorslist',component:VendorListComponent},
      {path:'',component:SubvendorlayoutComponent,children:[
        {path:'vendorslist/profile',component:VendorProfileComponent},
        {path:'vendorslist/edit',component:VendorEditComponent},
        ]},



];

@NgModule({
  declarations: [
    VendorListComponent,
    VendorEditComponent,
    VendorProfileComponent,
    SubvendorlayoutComponent,
    SubheadervendorComponent,
    SubsidebarvendorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VendorModuleModule { }
