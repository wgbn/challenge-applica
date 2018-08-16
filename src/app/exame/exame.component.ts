import {Component, OnInit, ViewChild} from '@angular/core';
import {Slides} from "@ionic/angular";
import {StorageService} from "../shared/services/storage.service";
import {ExameService} from "../shared/services/exame.service";

@Component({
  selector: 'app-exame',
  templateUrl: './exame.component.html',
  styleUrls: ['./exame.component.scss']
})
export class ExameComponent implements OnInit {

    @ViewChild(Slides) questions: Slides;

    exame: any = null;

    sliderOptions: any = {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true
    };

    constructor(private exameSrv: ExameService) { }

    /**
     * Ao iniciar, verifica a resolução do usuário para configurar os slides
     * e carrega os exames
     */
    ngOnInit() {
        if (window.innerWidth > 500) {
            this.sliderOptions.slidesPerView = 3;
        }

        this.loadExame();
    }

    /**
     * Carrega os exames previamente salvos na sessão do navegador
     */
    private loadExame() {
        this.exame = this.exameSrv.getExame();
        console.log(this.exame);
    }

}
