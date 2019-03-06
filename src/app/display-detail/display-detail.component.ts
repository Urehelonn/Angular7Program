import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-detail',
  templateUrl: './display-detail.component.html',
  styleUrls: ['./display-detail.component.css']
})
export class DisplayDetailComponent implements OnInit {
  codes = ['cats','ferrets','snow','beauties'];
  display = false;
  nums = [0];

  constructor() { }

  ngOnInit() {
  }

  toggleDetail(){
    this.display=!this.display;
    this.nums.push((this.nums.length-1)+1);
  }
}
