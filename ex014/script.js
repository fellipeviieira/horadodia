function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() //Trabalhar com hora, data, ano, etc
    var hora = data.getHours() //Endereçou hora para o var date js
    //var hora = 21
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#774c2a'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde
        img.src = 'tarde.png'
        document.body.style.background = '#bb8461'
    } else {
        //Boa Noite
        img.src = 'noite.png'
        document.body.style.background = '#507c94'
    }
}