import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-radio-group',
    templateUrl: './radio-group.component.html',
    styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent {

    @Input() name: string = '';
    @Input() values: any[] = [];
    @Input() labels: string[] = [];

    selected: any;

    @Output() select: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    onRadioSelect(e) {
        if (e.name == this.name) {
            this.selected = e.value;
            this.select.emit(e);
        }
    }

}
