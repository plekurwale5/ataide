import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-toolbar-footer',
  templateUrl: './toolbar-footer.component.html',
  styleUrls: ['./toolbar-footer.component.scss']
})
export class ToolbarFooterComponent implements OnInit {
  currentState:String="reset";
  @Output() stopped1 = new EventEmitter();
  @Output() record1 = new EventEmitter();
  
  stopped_call(){
    this.stopped1.emit('true');
    console.log("emit in toolbar")
  }
  record_call(){
    this.record1.emit('true');
    console.log("emit in toolbar")
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeState(value:String){
    this.currentState=value;
    if(this.currentState=='reset')
      this.stopped_call();    
    if(this.currentState=='playing')
      this.record_call();
    
  }
}
