import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }

    static setSession(key, value) {
        sessionStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    }

    static  getSession(key): any {
        let _item = sessionStorage.getItem(key);
        return _item.startsWith('{"') ? JSON.parse(_item) : _item;
    }

    static delSession(key) {
        sessionStorage.removeItem(key);
    }

    static delAllSession() {
        sessionStorage.clear();
    }
}
