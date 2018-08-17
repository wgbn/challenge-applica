import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss']
})
export class RadioComponent {

    @Input() name: string;
    @Input() label: string;
    @Input() value: any;
    @Input() selected: any;

    @Output() select: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    radioClick() {
        this.select.emit({name: this.name, value: this.value});
    }

}
