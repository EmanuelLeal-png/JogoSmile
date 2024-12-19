const imagem = document.querySelector('img');
const botao = document.getElementById('btnTrocarImagem');

///botao. onclick = function(){
function trocarImagem(){
    let src = imagem.getAttribute('src');
    if(src === 'https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/1226000/900/1226923.jpg') {
        imagem.setAttribute('src','https://wallpapercave.com/wp/wp1860988.jpg');
    } else {
        imagem.setAttribute('src','https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/1226000/900/1226923.jpg');
    }
}
botao.addEventListener('click', trocarImagem);

function mouseImagem(){
    let src = imagem.getAttribute('src');
    if(src === 'https://www.ilussopalmbeach.com/imagetag/1768/main/l/Used-2020-Lamborghini-Aventador-SVJ-LP-770-4-1707180406.jpg'){
        imagem.setAttribute('src','https://www.topgear.com/sites/default/files/2022/05/FFS-Oliver-Top-Gear-0001_FF27437.jpg');
    } else {
        imagem.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnxBKsRT3cwfGBvflhU1TlP-L86uGssjiSA&s')
    }
}
imagem.addEventListener('click', mouseImagem);

function colocarMouse(){
    let src = imagem.getAttribute('src');
    if(src === 'https://gt-rr.com/wp-content/uploads/2023/06/LB-WORKS-NISSAN-GT-R-R35-type-1.500001-scaled-1.jpg'){
        imagem.setAttribute('src','https://i.pinimg.com/originals/16/9d/25/169d2545b28070b0ed3ba652917f6aa5.jpg');
    } else {
        imagem.setAttribute('src','https://gt-rr.com/wp-content/uploads/2023/06/LB-WORKS-NISSAN-GT-R-R35-type-1.500001-scaled-1.jpg');
    }
}
imagem.addEventListener('mouseout', colocarMouse);  