import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExameComponent} from "./exame.component";
import {ResponderComponent} from "./responder/responder.component";

const routes: Routes = [
    { path: '', component: ExameComponent, canActivate: [] },
    { path: 'responder/:id', component: ResponderComponent, canActivate: [] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExameRoutingModule {}
