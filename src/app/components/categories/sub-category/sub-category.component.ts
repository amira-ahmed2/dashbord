import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {

  imgTest:string;
  constructor() {
    this.imgTest="assets/p1.jpg"
  }

  ngOnInit(): void {
  }

}
