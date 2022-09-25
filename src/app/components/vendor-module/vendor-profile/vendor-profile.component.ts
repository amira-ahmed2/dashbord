import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.scss']
})
export class VendorProfileComponent implements OnInit {
 typeOrder:string;
  constructor() {
    this.typeOrder='COMPLETED'
   }

  ngOnInit(): void {
  }

}
