import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flow-capture',
  templateUrl: './flow-capture.component.html',
  styleUrls: ['./flow-capture.component.scss']
})
export class FlowCaptureComponent implements OnInit {
  webpages=[{name:"Home Page",_id:1}];
  webobjectsFiltered=[
    {name:"username",_id:1,webobjectType:"delete",hidden:"false"},
    {name:"password",_id:2,webobjectType:"delete",hidden:"false"}
];
  currentWebPage="";
  constructor() { }

  ngOnInit(): void {
  }
  editElement(element){

  }
  copyObject(element){

  }
  deleteWebObject(element){}
  getIconFromWebObjectType(e){
    return "plus"
  }
  
  changePage(e){
    console.log(e)
    this.currentWebPage=e;
  }
}
