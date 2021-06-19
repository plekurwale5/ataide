import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { BaseAbstract } from '@core/abstract/base.abstract';
import { BrowserAPIService } from '@core/browser-api/browser-api.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends BaseAbstract implements OnInit {
    public  url: any;
    constructor(
        public injector: Injector,
        public browser: BrowserAPIService,
        public activatedRoute: ActivatedRoute,
        public route: Router,
    ) {
        super(injector);
    }

    ngOnInit(): void {
        super.ngOnInit();
        // console.log(this.router.params);
        this.activatedRoute.queryParams.subscribe(values => {
            console.log(values);//Which will print the properties you have passed
            switch (values.open) {
                case "3":
                    this.route.navigate(["/mainComponent",{}]);              
                    break;
            
            
                default:
                    return;
            }
        });
    }

    public openObjectCapture() {
        window.open("/index.html?open=2", '_blank', 'toolbar=0');
    }
    public openFlowCapture() {
        window.open("/index.html?open=3", '_blank', 'toolbar=0');
    }
    public openRecorder() {
        console.log(this.url + "...........");

        window.open(this.url, '_blank', 'toolbar=0');
        this.openFlowCapture();
        // this.openObjectCapture();
        // this.browser.createWindow(this.url);
    }

}
