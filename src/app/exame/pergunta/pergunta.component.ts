import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-pergunta',
    templateUrl: './pergunta.component.html',
    styleUrls: ['./pergunta.component.scss']
})
export class PerguntaComponent {

    @Input() index: number = null;
    @Input() exame: any = null;
    @Output() result: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    /**
     * Intercepta a escolha da resposta e emite para o componente pai
     * @param idx
     */
    radioClick(idx) {
        setTimeout( () => this.result.emit({questao: this.index, resposta: idx}), 500);
    }

}
