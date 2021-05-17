import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { HeaderComponent } from './core/components/header/header.component';
import { ToolbarFooterComponent } from './core/components/toolbar-footer/toolbar-footer.component';
import { ComponentsModule } from '@core/components/components.module';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    declarations: [
        AppComponent,
        
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule,
        FormsModule,
        SharedModule,
        PagesModule,
       
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }