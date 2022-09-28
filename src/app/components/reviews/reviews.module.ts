import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewListComponent } from './review-list/review-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/reviews/reviewlist',pathMatch:'full'},
      {path:'reviewlist',component:ReviewListComponent},
    ];


@NgModule({
  declarations: [
    ReviewListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReviewsModule { }
