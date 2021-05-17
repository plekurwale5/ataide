import { Component, OnInit, Injector } from '@angular/core';
import { SettingsState, ThemeType } from '@models';
import { SettingsService } from '@core/services/settings.service';
import { BaseAbstract } from '@core/abstract/base.abstract';
import { Router } from '@angular/router';

@Component({
    selector: 'app-settings-page',
    templateUrl: './settings-page.component.html',
    styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent extends BaseAbstract implements OnInit {

    public settings: SettingsState;
    public themeType: typeof ThemeType = ThemeType;

    constructor(
        public injector: Injector,
        private settingsService: SettingsService,
        private router: Router,
        
    ) {
        super(injector);
    }

    ngAfterViewInit() {
      
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.subs.settings = this.settingsService.$state.subscribe({
            next: (settings: SettingsState) => {
                this.settings = settings;
            }
        });
    }

    public selectTheme(theme: ThemeType): void {
        this.settingsService.setTheme(theme);
    }

    public openIde() {
        console.log("Opening ... ",window.location.href);
        // window.url

        let baseUrl = window.location.href.replace(this.router.url, '');
console.log(baseUrl,'***'+this.router.url)
    // window.open(baseUrl + '/home', '_blank');
        window.open('/index.html?open=1', '_blank', 'toolbar=0, width=1366, height=768');
    }
}
