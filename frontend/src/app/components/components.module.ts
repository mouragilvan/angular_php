import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    declarations: [
        CustomTableComponent,
        LoadingComponent
    ],
    imports: [
        CommonModule
    ],
    exports:[
        CustomTableComponent,
        LoadingComponent
    ],
    providers: []
})
export class ComponentsModule { }