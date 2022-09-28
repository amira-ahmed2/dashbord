import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {

  imgTest:string;
  constructor() {
    this.imgTest="assets/p1.jpg"
  }

  ngOnInit(): void {
  }

}
