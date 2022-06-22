function promessa(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(false)
        }

        setTimeout( () => {
            resolve(msg)
        }, tempo);
    });
}

const promises = [promessa('Promise 1', 3000), promessa( 'Promise 2', 500), promessa('Promise 3', 2000)];

Promise.race(promises) //sempre retorna o primeiro valor a ser resolvido
    .then(valor => {
        console.log(valor)
    })
    .catch(erro => {
        console.log(erro)
    })