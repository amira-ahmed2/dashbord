import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule,Routes } from '@angular/router';
import { SubheaderComponent } from './subheader/subheader.component';
import { SubsidbarComponent } from './subsidbar/subsidbar.component';
import { SubuserlayoutComponent } from './subuserlayout/subuserlayout.component';

const routes: Routes = [
  {path:'',redirectTo:'/users/userlist',pathMatch:'full'},
      {path:'userlist',component:UserListComponent},
      {path:'',component:SubuserlayoutComponent,children:[
      {path:'userlist/profile',component:UserProfileComponent},
      {path:'userlist/edit',component:UserEditComponent},
      ]},

    ];

@NgModule({
  declarations: [
    UserProfileComponent,
    UserEditComponent,
    UserListComponent,
    SubheaderComponent,
    SubsidbarComponent,
    SubuserlayoutComponent
  ],
  imports: [
  CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModuleModule { }
