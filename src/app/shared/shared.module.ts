import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './components/layout/layout.component';
import {HeaderComponent} from './components/header/header.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {IonicGlobal, IonicModule} from '@ionic/angular';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        IonicModule,
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent
    ],
    providers: [],
    exports: [
        // modulos
        FormsModule,
        HttpClientModule,
        IonicModule,
        // components
        LayoutComponent
    ]
})
export class SharedModule {}
