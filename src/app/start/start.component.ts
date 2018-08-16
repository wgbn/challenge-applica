import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ExameService} from "../shared/services/exame.service";
import {loading} from "../shared/decorators/loading";
import {UtilsService} from "../shared/services/utils.service";
import {StorageService} from "../shared/services/storage.service";

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

    entrada: any = {};
    showCodigoLoading: boolean = false;

    constructor(private router: Router, private exameSrv: ExameService, private utils: UtilsService) { }

    ngOnInit() { }

    /**
     * Intercepta o envio do formulário, verifica se os valores existem e repassa para o serviço
     * @param values    Valores vindos do formulário
     */
    @loading('showCodigoLoading')
    entrarSubmit(values) {
        if (values.nome && values.codigo) {
            return this.exameSrv.verificaCodigoERetrnaExame(values.nome, values.codigo).subscribe(
                success => {
                    StorageService.setSession('nome', values.nome);
                    this.exameSrv.setExame(success);
                    this.router.navigate(['/exame']);
                }, err => {
                    this.utils.showAlert('Ooops!', 'Ocorreu um erro ao consultar nossos servidores.');
                }
            );
        } else {
            this.utils.showAlert('Ooops!', 'Você precisa informar todos os dados.')
            return null;
        }
    }

}
