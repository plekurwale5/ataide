import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  stopped=false;
  stopPress(event){
    this.stopped=true;
  }

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
