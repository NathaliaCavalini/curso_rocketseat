function toggleMode() {
    const html = document.documentElement;
    const img = document.querySelector("#profile img")

    if (html.classList.contains('light')) {
    html.classList.remove('light')
    img.setAttribute('src', './assets/avatar-light.png')

    } else {
        html.classList.add('light')
        img.setAttribute('src', './assets/avatar.png')
    }
    
    //html.classList.toggle('light');
    //pegar a tag img;
    //substituir a imagem;
    //se tiver light mode, adicionar a imagem light
    //se tiver sem light mode, manter a imagem normal
}
