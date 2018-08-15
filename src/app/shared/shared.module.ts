import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './components/layout/layout.component';
import {HeaderComponent} from './components/header/header.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {IonicModule} from '@ionic/angular';
import { MenuComponent } from './components/menu/menu.component';

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
        MenuComponent
    ],
    providers: [],
    exports: [
        // modulos
        FormsModule,
        HttpClientModule,
        IonicModule,
        // components
        LayoutComponent,
        MenuComponent
    ]
})
export class SharedModule {}
