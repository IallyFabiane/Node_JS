function promessa() {
    let emCache = true;
    if (emCache) {
      return Promise.reject('Página carregando') //retorna uma promessa rejeitada imediatamente
    }
}

promessa() 
    .then(valor => {
        console.log(valor)
    })
    .catch(erro => {
        console.log(erro)
    })