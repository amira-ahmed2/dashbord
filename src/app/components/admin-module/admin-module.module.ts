import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/admins/adminslist',pathMatch:'full'},
      {path:'adminslist',component:AdminListComponent},
      {path:'adminslist/profile',component:AdminProfileComponent},
      {path:'adminslist/edit',component:AdminEditComponent},


];

@NgModule({
  declarations: [
    AdminProfileComponent,
    AdminEditComponent,
    AdminListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModuleModule { }
