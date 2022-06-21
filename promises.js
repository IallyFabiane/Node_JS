function jsAssincrono(x) {
    return new Promise ((resolve, reject) => {
        if (x > 1) {
            resolve('resolvido');
        } 
        else {
            reject('erro')
        }
    });
}

jsAssincrono(0)
    .then(console.log) //acessando o valor da promise com o .then()
    .catch(console.error); //acessando o erro

