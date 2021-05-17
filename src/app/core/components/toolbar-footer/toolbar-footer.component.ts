import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-footer',
  templateUrl: './toolbar-footer.component.html',
  styleUrls: ['./toolbar-footer.component.scss']
})
export class ToolbarFooterComponent implements OnInit {
  currentState:String="reset";
  constructor() { }

  ngOnInit(): void {
  }
  changeState(value:String){
    this.currentState=value;
  }
}
