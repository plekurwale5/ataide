import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { HeaderComponent } from "./header/header.component";
import { ToolbarFooterComponent } from "./toolbar-footer/toolbar-footer.component";

let components=[
    HeaderComponent,
    ToolbarFooterComponent
]

@NgModule({
    declarations: components,
    exports:components,
    imports: [ CommonModule,SharedModule  ],
})

export class ComponentsModule { }