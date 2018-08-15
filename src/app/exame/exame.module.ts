import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExameRoutingModule} from './exame-routing.module';
import {SharedModule} from "../shared/shared.module";
import {ResponderComponent} from './responder/responder.component';
import {ExameComponent} from "./exame.component";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ExameRoutingModule
    ],
    declarations: [
        ExameComponent,
        ResponderComponent
    ]
})
export class ExameModule {}
