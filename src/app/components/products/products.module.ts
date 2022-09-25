import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Routes ,RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/products/productslist',pathMatch:'full'},
      {path:'productslist',component:ProductListComponent},
      {path:'productslist/details',component:ProductDetailsComponent},
      {path:'productslist/addproduct',component:AddProductComponent},


    ];

@NgModule({
  declarations: [
    ProductListComponent,
    AddProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
