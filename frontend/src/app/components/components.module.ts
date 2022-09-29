import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomTableComponent } from './custom-table/custom-table.component';

@NgModule({
    declarations: [
        CustomTableComponent
    ],
    imports: [
        CommonModule
    ],
    exports:[
        CustomTableComponent
    ],
    providers: []
})
export class ComponentsModule { }