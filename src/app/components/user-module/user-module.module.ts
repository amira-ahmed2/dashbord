import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/users/userlist',pathMatch:'full'},
      {path:'userlist',component:UserListComponent},
      {path:'userlist/profile',component:UserProfileComponent},
      {path:'userlist/edit',component:UserEditComponent},


];

@NgModule({
  declarations: [
    UserProfileComponent,
    UserEditComponent,
    UserListComponent
  ],
  imports: [
  CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModuleModule { }
