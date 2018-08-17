import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExameRoutingModule} from './exame-routing.module';
import {SharedModule} from "../shared/shared.module";
import {ExameComponent} from "./exame.component";
import { PerguntaComponent } from './pergunta/pergunta.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ExameRoutingModule
    ],
    declarations: [
        ExameComponent,
        PerguntaComponent,
    ]
})
export class ExameModule {}
