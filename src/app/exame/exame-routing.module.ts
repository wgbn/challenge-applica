import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExameComponent} from "./exame.component";

const routes: Routes = [
    { path: '', component: ExameComponent, canActivate: [] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExameRoutingModule {}
