function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[erro] verique as imformações e coloque um valor valido')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 11) {
                //crianca
                img.setAttribute('src', 'crianca.h.jpg')
            } else if (idade < 20) {
                //jovem
                img.setAttribute('src', 'jovem.h.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto.h.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.h.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 11) {
                //crianca
                img.setAttribute('src', 'crianca.m.jpg')
            } else if (idade < 20) {
                //jovem
                img.setAttribute('src', 'jovem.m.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto.m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.m.jpg')
            }
        }
        res.innerHTML = `voce é ${genero} e tem ${idade} anos de idade`
        res.appendChild(img)
    }
}