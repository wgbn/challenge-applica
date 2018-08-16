import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExameRoutingModule} from './exame-routing.module';
import {SharedModule} from "../shared/shared.module";
import {ExameComponent} from "./exame.component";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ExameRoutingModule
    ],
    declarations: [
        ExameComponent,
    ]
})
export class ExameModule {}
