import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentTab:String="object";
  @Output() headerChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  switchTab(tab:string): void {
    this.currentTab=tab;
    this.headerChanged.emit(tab);
  }

}
