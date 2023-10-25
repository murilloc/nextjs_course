 function mega(qtde = 7, numerosMega = []) {
    if (qtde < 6 && qtde > 60) {
        throw new Error('Quantidade inválida!')
    }

    if(numerosMega.length === qtde) {
        return numerosMega.sort((n1, n2) => n1 - n2)
    }

    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    if (!numerosMega.includes(numeroAleatorio)) {
        return mega(qtde, [...numerosMega, numeroAleatorio])
    } else {
        return mega(qtde, numerosMega)
    }

}

export {
    mega
}

