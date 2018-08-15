import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {Slides} from "@ionic/angular";

@Component({
    selector: 'app-responder',
    templateUrl: './responder.component.html',
    styleUrls: ['./responder.component.scss']
})
export class ResponderComponent implements OnInit {

    @ViewChild(Slides) questions: Slides;

    sliderOptions: any = {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true
    };

    constructor() { }

    ngOnInit() {
        if (window.innerWidth > 500) {
            this.sliderOptions.slidesPerView = 3;
        }
    }

    /*@HostListener('window:resize', ['$event'])
    onResize(event) {
        if (window.innerWidth > 500) {
            this.sliderOptions.slidesPerView = 3;
            this.questions.options = this.sliderOptions;
        }
        //console.log(this.sliderOptions);
    }*/

}
