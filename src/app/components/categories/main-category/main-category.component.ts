import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.scss']
})
export class MainCategoryComponent implements OnInit {

  imgTest:string;
  constructor() {
    this.imgTest="assets/p1.jpg"}

  ngOnInit(): void {
  }

}
