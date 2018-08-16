import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {StorageService} from "./storage.service";

@Injectable({
    providedIn: 'root'
})
export class ExameService {

    private exames: any[] = [];
    private exame: any = null;

    constructor() {
        this.mockExames();
    }

    /**
     * Faz um mock dos exames disponíveis, que deve vir de uma API
     */
    private mockExames() {
        this.exames = [
            {
                titulo: 'Exame de lógica avançada para turma expert II',
                questoes: [
                    {
                        questao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis mollis nunc eget eleifend.',
                        opcoes: [
                            'Cras eget sapien',
                            'In pretium justo',
                            'Etiam sit amet lectus',
                            'Duis sapien odio',
                            'Sed in sapien'
                        ],
                        resposta: 1
                    },
                    {
                        questao: 'Cras eget sapien quis felis tempor auctor. Nunc at dapibus sem.',
                        opcoes: [
                            'Cras eget sapien',
                            'In pretium justo',
                            'Etiam sit amet lectus',
                            'Duis sapien odio',
                            'Sed in sapien'
                        ],
                        resposta: 1
                    },
                    {
                        questao: 'In pretium justo ac urna congue, eget efficitur felis maximus. Donec varius ac arcu vitae consequat.',
                        opcoes: [
                            'Cras eget sapien',
                            'In pretium justo',
                            'Etiam sit amet lectus',
                            'Duis sapien odio',
                            'Sed in sapien'
                        ],
                        resposta: 1
                    },
                    {
                        questao: 'Etiam sit amet lectus rhoncus, gravida orci eget, viverra ex. Aenean sit amet interdum ex.',
                        opcoes: [
                            'Cras eget sapien',
                            'In pretium justo',
                            'Etiam sit amet lectus',
                            'Duis sapien odio',
                            'Sed in sapien'
                        ],
                        resposta: 1
                    },
                ]
            },
            {
                titulo: 'Exame de lógica discreta para turma inicial I',
                questoes: [
                    {
                        questao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis mollis nunc eget eleifend.',
                        opcoes: [
                            'Cras eget sapien',
                            'In pretium justo',
                            'Etiam sit amet lectus',
                            'Duis sapien odio',
                            'Sed in sapien'
                        ],
                        resposta: 1
                    },
                    {
                        questao: 'Cras eget sapien quis felis tempor auctor. Nunc at dapibus sem.',
                        opcoes: [
                            'Cras eget sapien',
                            'In pretium justo',
                            'Etiam sit amet lectus',
                            'Duis sapien odio',
                            'Sed in sapien'
                        ],
                        resposta: 1
                    },
                    {
                        questao: 'In pretium justo ac urna congue, eget efficitur felis maximus. Donec varius ac arcu vitae consequat.',
                        opcoes: [
                            'Cras eget sapien',
                            'In pretium justo',
                            'Etiam sit amet lectus',
                            'Duis sapien odio',
                            'Sed in sapien'
                        ],
                        resposta: 1
                    },
                    {
                        questao: 'Etiam sit amet lectus rhoncus, gravida orci eget, viverra ex. Aenean sit amet interdum ex.',
                        opcoes: [
                            'Cras eget sapien',
                            'In pretium justo',
                            'Etiam sit amet lectus',
                            'Duis sapien odio',
                            'Sed in sapien'
                        ],
                        resposta: 1
                    },
                ]
            },
            {
                titulo: 'Exame de química para turma A',
                questoes: [
                    {
                        questao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis mollis nunc eget eleifend.',
                        opcoes: [
                            'Cras eget sapien',
                            'In pretium justo',
                            'Etiam sit amet lectus',
                            'Duis sapien odio',
                            'Sed in sapien'
                        ],
                        resposta: 1
                    },
                    {
                        questao: 'Cras eget sapien quis felis tempor auctor. Nunc at dapibus sem.',
                        opcoes: [
                            'Cras eget sapien',
                            'In pretium justo',
                            'Etiam sit amet lectus',
                            'Duis sapien odio',
                            'Sed in sapien'
                        ],
                        resposta: 1
                    },
                    {
                        questao: 'In pretium justo ac urna congue, eget efficitur felis maximus. Donec varius ac arcu vitae consequat.',
                        opcoes: [
                            'Cras eget sapien',
                            'In pretium justo',
                            'Etiam sit amet lectus',
                            'Duis sapien odio',
                            'Sed in sapien'
                        ],
                        resposta: 1
                    },
                    {
                        questao: 'Etiam sit amet lectus rhoncus, gravida orci eget, viverra ex. Aenean sit amet interdum ex.',
                        opcoes: [
                            'Cras eget sapien',
                            'In pretium justo',
                            'Etiam sit amet lectus',
                            'Duis sapien odio',
                            'Sed in sapien'
                        ],
                        resposta: 1
                    },
                ]
            },
            {
                titulo: 'Exame de Matemática para turma B',
                questoes: [
                    {
                        questao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis mollis nunc eget eleifend.',
                        opcoes: [
                            'Cras eget sapien',
                            'In pretium justo',
                            'Etiam sit amet lectus',
                            'Duis sapien odio',
                            'Sed in sapien'
                        ],
                        resposta: 1
                    },
                    {
                        questao: 'Cras eget sapien quis felis tempor auctor. Nunc at dapibus sem.',
                        opcoes: [
                            'Cras eget sapien',
                            'In pretium justo',
                            'Etiam sit amet lectus',
                            'Duis sapien odio',
                            'Sed in sapien'
                        ],
                        resposta: 1
                    },
                    {
                        questao: 'In pretium justo ac urna congue, eget efficitur felis maximus. Donec varius ac arcu vitae consequat.',
                        opcoes: [
                            'Cras eget sapien',
                            'In pretium justo',
                            'Etiam sit amet lectus',
                            'Duis sapien odio',
                            'Sed in sapien'
                        ],
                        resposta: 1
                    },
                    {
                        questao: 'Etiam sit amet lectus rhoncus, gravida orci eget, viverra ex. Aenean sit amet interdum ex.',
                        opcoes: [
                            'Cras eget sapien',
                            'In pretium justo',
                            'Etiam sit amet lectus',
                            'Duis sapien odio',
                            'Sed in sapien'
                        ],
                        resposta: 1
                    },
                ]
            },
        ];
    }

    /**
     * Consulta a API sobre a validade do código do exame e, sendo válido, traz o exame
     * @param nome      Nome do cliente
     * @param codigo    Código do exame
     *
     * Neste caso, esperamos 1.5s para simular uma consilta a API e escolhemos randomicamente um exame disponivgel no mock
     */
    verificaCodigoERetrnaExame(nome, codigo): Observable<any> {
        return new Observable<any>( obs => {
            setTimeout( () => obs.next(this.exames[Math.floor(Math.random() * 4)]), 1500);
        });
    }

    /**
     * Salva temporariamente o exame do cliente
     * @param exame
     */
    setExame(exame: any) {
        this.exame = exame;
        StorageService.setSession('exame', exame);
    }

    /**
     * Recupera o exame salvo temporariamente
     */
    getExame(): any {
        !this.exame && (this.exame = StorageService.getSession('exame'));
        return this.exame;
    }
}
