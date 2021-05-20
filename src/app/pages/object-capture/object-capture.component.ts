import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-capture',
  templateUrl: './object-capture.component.html',
  styleUrls: ['./object-capture.component.scss']
})
export class ObjectCaptureComponent implements OnInit {
  ctvList=[
    {"command":{name:"command"},"target":{name:"target"},"value":""},
    {"command":{name:"command"},"target":{name:"target"},"value":""},
    {"command":{name:"command"},"target":{name:"target"},"value":""}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
