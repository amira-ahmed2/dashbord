import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCategoryComponent } from './main-category/main-category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { Routes ,RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/categories/maincategory',pathMatch:'full'},
      {path:'maincategory',component:MainCategoryComponent},
      {path:'subcategory',component:SubCategoryComponent},
    ];

@NgModule({
  declarations: [
    MainCategoryComponent,
    SubCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class CategoriesModule { }
