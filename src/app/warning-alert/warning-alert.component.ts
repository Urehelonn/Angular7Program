import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  warningBtEnable = false;
  
  constructor() {
    setTimeout(()=>{
      this.warningBtEnable = true;
    },2000);
    
  }

  ngOnInit() {
  }

}
