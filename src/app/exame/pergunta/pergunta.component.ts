import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-pergunta',
    templateUrl: './pergunta.component.html',
    styleUrls: ['./pergunta.component.scss']
})
export class PerguntaComponent implements OnInit {

    @Input() index: number = null;
    @Input() exame: any = null;
    @Output() result: EventEmitter<any> = new EventEmitter<any>();

    values: any[] = [];
    labels: string[] = [];

    constructor() { }

    /**
     * Ao iniciar, mapeia os labels e values das opções de respostas
     * para passar para o app-radio-group
     */
    ngOnInit() {
        this.values = this.exame.opcoes.map( (val, key) => key);
        this.labels = this.exame.opcoes;
    }

    /**
     * Intercepta a escolha da resposta e emite para o componente pai
     * @param e
     */
    onSelect(e) {
        setTimeout( () => this.result.emit({questao: this.index, resposta: e.value}), 500);
    }

}
