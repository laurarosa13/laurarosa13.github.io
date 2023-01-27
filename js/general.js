document.getElementById('menu-resp').addEventListener('click',function(){
    document.getElementById("mresp").classList.toggle('mostrar-menu');
});

document.getElementById('titulo').addEventListener('mouseover',function(){
    document.getElementById("foto-perfil").style.boxShadow = "0px 0px 10px 10px #FFFFFF";
});

document.getElementById('titulo').addEventListener('mouseout',function(){
    document.getElementById("foto-perfil").style.boxShadow = "none";
});

function cambiarColor(color1,color2,este,nombre) {

    document.getElementById('pongo-color').innerHTML = nombre;

    const collection0 = document.getElementsByClassName("color");
    for (let i = 0; i < collection0.length; i++) {
      collection0[i].classList.remove('activo');
    }

    este.classList.add('activo');

    document.getElementById('top').style.backgroundColor=color1;
    document.getElementById('nav-menu').style.backgroundColor=color2; 
    document.getElementById('menu-nav').style.backgroundColor=color2; 
    document.getElementById('pie').style.backgroundColor=color2; 

    document.getElementById('email').style.color=color2; 

    const collection = document.getElementsByClassName("ico-seccion");
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.color = color2;
    }

    const collection2 = document.getElementsByClassName("info-box");
    for (let i = 0; i < collection2.length; i++) {
        collection2[i].style.borderColor = color2;
    }

    const collection3 = document.getElementsByClassName("icon-seccion");
    for (let i = 0; i < collection3.length; i++) {
      collection3[i].style.color = color2;
    }
}