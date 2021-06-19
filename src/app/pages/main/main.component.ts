import { Component, OnInit } from '@angular/core';


declare var recorder: any;
declare var browser: any;
declare var contentWindowId: any;
declare var extCommand: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  stopped = false;
  stopPress(event) {
    this.stopped = true;
  }
  isRecording: boolean;


  currentSwitch = "object";
  constructor() { }

  ngOnInit(): void {
  }
  changed(ev) {
    this.currentSwitch = ev;
    console.log("current tab is \t", ev);
  }
  isObjectView() {
    return this.currentSwitch == "object" ? true : false;
  }
  recordFlow(event) {
    console.log("Recording.....", event);
    recorder.attach();
    // KAT-BEGIN focus on window when recording
    if (contentWindowId) {
      browser.windows.update(contentWindowId, { focused: true });
    }
    // KAT-END
    browser.tabs.query({ windowId: extCommand.getContentWindowId(), url: "<all_urls>" })
      .then(function (tabs) {
        for (let tab of tabs) {
          this.browser.tabs.sendMessage(tab.id, { attachRecorder: true });
        }
      });

    // _gaq.push(['_trackEvent', 'app', 'record']);

    // this.isRecording = !this.isRecording;
    // if (this.isRecording) {
    //   console.log(" if Recording.....", this.isRecording);

    //   //stop
    //   // this.recorder.attach();
    //   // notificationCount = 0;
    //   // // KAT-BEGIN focus on window when recording
    //   // if (contentWindowId) {
    //   //     browser.windows.update(contentWindowId, {focused: true});
    //   // }
    //   // // KAT-END
    //   // browser.tabs.query({windowId: extCommand.getContentWindowId(), url: "<all_urls>"})
    //   // .then(function(tabs) {
    //   //     for(let tab of tabs) {
    //   //         browser.tabs.sendMessage(tab.id, {attachRecorder: true});
    //   //     }
    //   // });
    //   // // KAT-BEGIN add space for record button label
    //   // recordButton.childNodes[1].textContent = " Stop";
    //   // switchRecordButton(false);
    //   // KAT-END
    // }
    // else {
    //   console.log("else Recording.....", this.isRecording);

    //   //stop
    //   // this.recorder.detach();
    //   // browser.tabs.query({windowId: extCommand.getContentWindowId(), url: "<all_urls>"})
    //   // .then(function(tabs) {
    //   //     for(let tab of tabs) {
    //   //         browser.tabs.sendMessage(tab.id, {detachRecorder: true});
    //   //     }
    //   // });
    //   // // KAT-BEGIN add space for record button label
    //   recordButton.childNodes[1].textContent = " Record";
    //   switchRecordButton(true);
    //   // KAT-END
    // }
  // }
}
}
