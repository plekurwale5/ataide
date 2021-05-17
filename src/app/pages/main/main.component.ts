import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  currentSwitch="object";
  constructor() { }

  ngOnInit(): void {
  }
  changed(ev){
    this.currentSwitch=ev;
    console.log("current tab is \t",ev);
  }
  isObjectView(){
    return this.currentSwitch=="object"?true:false;
  }

}
