import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { UndefinedpageComponent } from './components/undefinedpage/undefinedpage.component';
import { UserComponent } from './components/user/user.component';
import { VendorComponent } from './components/vendor/vendor.component';

// const routes: Routes = [
//   {path:'login',component:LoginadminComponent},
//   {path:'main',component:MainlayoutComponent,children:[
//     {path:'',redirectTo:'/main',pathMatch:'full'},
//     {path:'user',component:UserComponent},
//     {path:'vendor',component:VendorComponent}
//   ]},
//   // {path:'**',component:UndefinedpageComponent}
// ];

const routes: Routes = [
  {path:'login',component:LoginadminComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  // {path:'main',component:MainlayoutComponent,children:[
    {path:'',component:MainlayoutComponent,children:[
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'dashboard',component:DashboardComponent},
    {path:'user',component:UserComponent},
    {path:'vendor',component:VendorComponent}
  ]},
  {path:'**',component:UndefinedpageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
