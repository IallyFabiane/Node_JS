function promessa() {
    let emCache = true;
    if (emCache) {
      return Promise.resolve('Página em cache') //retorna uma promessa já resolvida  
    } 
}

promessa() 
    .then(valor => {
        console.log(valor)
    })
    .catch(erro => {
        console.log(erro)
    })