import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './components/layout/layout.component';
import {HeaderComponent} from './components/header/header.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {IonicModule} from '@ionic/angular';
import { MenuComponent } from './components/menu/menu.component';
import { ProgressComponent } from './components/progress/progress.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        IonicModule,
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        MenuComponent,
        ProgressComponent
    ],
    providers: [],
    exports: [
        // modulos
        FormsModule,
        HttpClientModule,
        IonicModule,
        // components
        LayoutComponent,
        MenuComponent,
        ProgressComponent
    ]
})
export class SharedModule {}
