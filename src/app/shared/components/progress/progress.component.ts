import {Component, Input, OnChanges} from '@angular/core';


@Component({
    selector: 'app-progress',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnChanges {

    @Input() progress: number = 0;
    @Input() max: number = 0;

    percent: number = 0;

    constructor() { }

    ngOnChanges() {
        this.percent = Math.ceil((this.progress / this.max) * 100);
    }

}
