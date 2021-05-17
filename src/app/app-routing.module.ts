import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowCaptureComponent } from './pages/flow-capture/flow-capture.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { MainComponent } from './pages/main/main.component';
import { ObjectCaptureComponent } from './pages/object-capture/object-capture.component';
import { SettingsPageComponent } from './pages/settings/settings-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/settings', pathMatch: 'full' },
    {
        path: 'index.html',
        component: HomePageComponent
    },
    {
        path: 'settings',
        component: SettingsPageComponent
    },
    {
        path: 'objectRecorder',
        component: ObjectCaptureComponent
    },
    {
        path: 'flowRecorder',
        component: FlowCaptureComponent
    },
    {
        path: 'mainComponent',
        component: MainComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
