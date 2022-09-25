import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { UndefinedpageComponent } from './components/undefinedpage/undefinedpage.component';
const routes: Routes = [
  {path:'login',component:LoginadminComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'',component:MainlayoutComponent,children:[
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'dashboard',component:DashboardComponent},
    {path: 'users',
      loadChildren: () => import('src/app/components/user-module/user-module.module').then(m => m.UserModuleModule)
    },
    {path: 'vendors',
    loadChildren: () => import('src/app/components/vendor-module/vendor-module.module').then(m => m.VendorModuleModule)
  },
  {path: 'admins',
  loadChildren: () => import('src/app/components/admin-module/admin-module.module').then(m => m.AdminModuleModule)
},
{path: 'products',
loadChildren: () => import('src/app/components/products/products.module').then(m => m.ProductsModule)
},
  ]},
  {path:'**',component:UndefinedpageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
