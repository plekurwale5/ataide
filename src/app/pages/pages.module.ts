import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home/home-page.component';
import { SettingsPageComponent } from './settings/settings-page.component';
import { SharedModule } from '@shared/shared.module';
import { FlowCaptureComponent } from './flow-capture/flow-capture.component';
import { ObjectCaptureComponent } from './object-capture/object-capture.component';
import { ComponentsModule } from '@core/components/components.module';
import { HeaderComponent } from '@core/components/header/header.component';
import { ToolbarFooterComponent } from '@core/components/toolbar-footer/toolbar-footer.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
    declarations: [
        HomePageComponent,
        SettingsPageComponent,
        FlowCaptureComponent,
        ObjectCaptureComponent,
        MainComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        ComponentsModule,    
        BrowserModule,
    FormsModule,
    CommonModule,
    MatIconModule, MatSelectModule, MatFormFieldModule,MatTooltipModule
  ],
})
export class PagesModule { }
