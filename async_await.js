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

async function executa() {
    try {
        const fase1 = await promessa('Fase 1', 1000)
        console.log(fase1)
        const fase2 = await promessa('Fase 2', 1000)
        console.log(fase2)
        const fase3 = await promessa('Fase 3', 1000)
        console.log(fase3)
        console.log('Terminaos na fase: ', fase3)
    } catch(erro) {
        console.log(erro)
    }
}

executa();