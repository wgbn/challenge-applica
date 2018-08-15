import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

    public entrada: any = {
        nome: 'walter gandarella',
        codigo: ''
    };

    constructor(private router: Router) { }

    ngOnInit() { }

    entrarSubmit(values) {
        console.log(values);
        console.log(this.entrada);
        this.router.navigate(['/exame']);
    }

}
