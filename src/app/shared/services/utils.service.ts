import {Injectable} from '@angular/core';
import {AlertController} from "@ionic/angular";

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor(private alertController: AlertController) { }

    async showAlert(titulo, texto) {
        const alert = await this.alertController.create({
            header: titulo,
            message: texto,
            buttons: ['OK']
        });

        await alert.present();
    }
}
