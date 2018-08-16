/**
 * Cria um decorator para métodos que retirnam Observables
 * O decorator recebe uma flag indicando qual o propriedade na classe que deve ser alterada
 * O decorator deve ser usado para fazer automaticamente a troca de estado do loading de carregamento
 * de um Observable
 * @param flag
 */
export function loading(flag: string) {

    return function(target: any, key: string, descriptor: any) {

        let originalMethod = descriptor.value;

        descriptor.value = function(...args) {
            this[flag] = true;
            let result = originalMethod.apply(this, args);

            if (result) {
                result.next = (val) => {
                    this[flag] = false;
                    return result._next(val);
                };
                result.error = (err) => {
                    this[flag] = false;
                    return result._error(err);
                };
            } else {
                this[flag] = false;
            }

            return result;
        };

        return descriptor;
    }

}
