import {Component, Input} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    @Input() showBackButton: boolean = false;

    constructor(private menuCtrl: MenuController, private location: Location) { }

    openMenuClick() {
        this.menuCtrl.toggle();
    }

    backClick() {
        this.location.back();
    }

}
