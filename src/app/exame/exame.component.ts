import {Component, OnInit, ViewChild} from '@angular/core';
import {Slides} from "@ionic/angular";
import {StorageService} from "../shared/services/storage.service";
import {ExameService} from "../shared/services/exame.service";
import {loading} from '../shared/decorators/loading';
import {Location} from '@angular/common';
import {UtilsService} from '../shared/services/utils.service';

@Component({
  selector: 'app-exame',
  templateUrl: './exame.component.html',
  styleUrls: ['./exame.component.scss']
})
export class ExameComponent implements OnInit {

    @ViewChild(Slides) questions: Slides;

    exame: any = null;
    nome: string = '';
    resultado: any = {};

    progress: number = 0;
    showSubmitLoading: boolean = false;

    sliderOptions: any = {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true
    };

    constructor(private exameSrv: ExameService, private location: Location, private utils: UtilsService) { }

    /**
     * Ao iniciar, verifica a resolução do usuário para configurar os slides
     * e carrega os exames
     */
    ngOnInit() {
        if (window.innerWidth > 500) {
            this.sliderOptions.slidesPerView = 3;
        }

        this.nome = StorageService.getSession('nome');

        this.loadExame();
    }

    /**
     * Carrega os exames previamente salvos na sessão do navegador
     */
    private loadExame() {
        this.exame = this.exameSrv.getExame();
        this.resultado = {
            exameId: this.exame.id,
            respostas: new Array<any>(this.exame.questoes.length)
        }
    }

    /**
     * Recebe o resultado do componente Pergunta e o adiciona à resposta,
     * então avança o slide
     * @param e
     */
    onQuestaoResult(e: any) {
        this.resultado.respostas[e.questao] = e;
        this.questions.slideNext();
    }

    @loading('showSubmitLoading')
    submeterExame() {
        return this.exameSrv.submeterExame(this.resultado).subscribe(
            success => {
                StorageService.delAllSession();
                this.location.back();
            }, err => {
                this.utils.showAlert('Ooops!', 'Ocorreu um erro ao consultar nossos servidores.');
            }
        )
    }

    /**
     * Escuta a mudança dos slides para fazer a paginação
     */
    async onSlideChange() {
        this.progress = await this.questions.getActiveIndex();
    }

}
