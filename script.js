// Botones para paneles de texto e imagen

const panelTexto = document.getElementById('panel-texto');
const panelImagen = document.getElementById('panel-imagen');
const botonPanelImagen= document.getElementById('boton-panel-imagen');
const botonPanelTexto = document.getElementById('boton-panel-texto');

botonPanelImagen.addEventListener('click',()=>{
    panelImagen.style.display= 'inline-block';
    panelTexto.style.display='none';
})
botonPanelTexto.addEventListener('click',()=>{
    panelTexto.style.display='inline-block';
    panelImagen.style.display='none';
})


// Botones para cartel de top text y bottom text

const textoSuperior= document.getElementById('texto-superior');
const textoInferior= document.getElementById('texto-inferior');
const checkboxSinTextoSuperior= document.getElementById('checkbox-sin-texto-superior');
const checkboxSinTextoInferior= document.getElementById('checkbox-sin-texto-inferior');
checkboxSinTextoSuperior.addEventListener('click',()=>{
    if (checkboxSinTextoSuperior.checked){
        textoSuperior.style.display= 'none';
    }
    else{
        textoSuperior.style.display='inline-block';
    }
})
checkboxSinTextoInferior.addEventListener('click',()=>{
    if (checkboxSinTextoInferior.checked){
        textoInferior.style.display= 'none';
    }
    else{
        textoInferior.style.display='inline-block';
    }
})

// Input para ingresar URL
const inputURL=document.getElementById('input-url');
const cuadradoImagen= document.getElementById('cuadrado-imagen');
inputURL.addEventListener('input',event =>{
const urlImagen= event.target.value;
cuadradoImagen.style.backgroundImage=`url("${urlImagen}")`;

})

//Input para cambiar el color del fondo
const inputColorFondo = document.getElementById('input-color-fondo');
const valorColorFondo = document.getElementById('valor-color-fondo');
inputColorFondo.addEventListener('input', (event)=>{
const colorFondo = event.target.value;
cuadradoImagen.style.backgroundColor= colorFondo;
valorColorFondo.innerText= colorFondo.toUpperCase();
})

//Select para filtros mezclados
const selectFiltros = document.getElementById('select-filtros');
selectFiltros.addEventListener('input',(event)=>{
    const opcion = event.target.value;
    cuadradoImagen.style.backgroundBlendMode= opcion;
})

//Input range para estilar imagen meme

const pointsBrillo = document.getElementById('points-brillo');
const pointsOpacidad = document.getElementById('points-opacidad'); 
const pointsContraste = document.getElementById('points-contraste');
const pointsDesenfoque = document.getElementById('points-desenfoque');
const pointsGrises = document.getElementById('points-grises');
const pointsSepia = document.getElementById('points-sepia'); 
const pointsHUE = document.getElementById('points-hue'); 
const pointsSaturado = document.getElementById('points-saturado'); 
const pointsNegativo = document.getElementById('points-negativo');

const filtro = () =>{
    cuadradoImagen.style.filter = `brightness(${pointsBrillo.value}) opacity(${pointsOpacidad.value}) contrast(${pointsContraste.value}%) blur(${pointsDesenfoque.value}px) grayscale(${pointsGrises.value}%) sepia(${pointsSepia.value}%) hue-rotate(${pointsHUE.value}deg) saturate(${pointsSaturado.value}%) invert(${pointsNegativo.value})`;
}
pointsBrillo.addEventListener('input', filtro);
pointsOpacidad.addEventListener('input', filtro);
pointsContraste.addEventListener('input', filtro);
pointsDesenfoque.addEventListener('input', filtro);
pointsGrises.addEventListener('input', filtro);
pointsSepia.addEventListener('input', filtro);
pointsHUE.addEventListener('input', filtro);
pointsSaturado.addEventListener('input', filtro);
pointsNegativo.addEventListener('input', filtro);

//Input Restablecer filtros
const botonRestablecerFiltros = document.getElementById('boton-restablecer-filtros')
botonRestablecerFiltros.addEventListener('click',()=>{
    pointsBrillo.value= 1;
    cuadradoImagen.style.filter = `brightness(1)`;
    pointsOpacidad.value= 1;
    cuadradoImagen.style.filter = `opacity(1)`;
    pointsContraste.value= 100;
    cuadradoImagen.style.filter = `contrast(1%)`;
    pointsDesenfoque.value= 0;
    cuadradoImagen.style.filter = `blur(0px)`;
    pointsGrises.value= 0;
    cuadradoImagen.style.filter = `grayscale(1%)`;
    pointsSepia.value= 0;
    cuadradoImagen.style.filter = `sepia(0%)`;
    pointsHUE.value= 0;
    cuadradoImagen.style.filter = `rotate(0deg)`;
    pointsSaturado.value= 100;
    cuadradoImagen.style.filter = `saturation(100%)`;
    pointsNegativo.value= 0;
    cuadradoImagen.style.filter = `invert(0)`;
})

// Input de texto superior y texto inferior
const textareaSuperior = document.getElementById('textarea-superior');
const textareaInferior = document.getElementById('textarea-inferior');
textareaSuperior.addEventListener('input',(event)=>{
    const texto = event.target.value;
    textoSuperior.innerText= texto;
})
textareaInferior.addEventListener('input', (event)=>{
    const texto = event.target.value;
    textoInferior.innerText= texto;
})

//Select opciones de fonts
const selectFuentes = document.getElementById('select-fuentes');
selectFuentes.addEventListener('input', (event)=>{
    const fuente = event.target.value;
    textoInferior.style.fontFamily= fuente;
    textoSuperior.style.fontFamily= fuente;
})

//Input para tamaño de la letra
const inputTamanioLetra = document.getElementById('input-tamanio-letra');
inputTamanioLetra.addEventListener('input',(event)=>{
    const tamanioLetra = event.target.value;
    textoSuperior.style.fontSize= `${tamanioLetra}px`;
    textoInferior.style.fontSize= `${tamanioLetra}px`;
})

//Botones para alinear el texto
const botonAlignLeft = document.getElementById('boton-align-left');
const botonAlignCenter = document.getElementById('boton-align-center');
const botonAlignRight = document.getElementById('boton-align-right');
botonAlignLeft.addEventListener('click',()=>{
    textoSuperior.style.textAlign= 'left';
    textoInferior.style.textAlign= 'left';
})
botonAlignCenter.addEventListener('click',()=>{
    textoSuperior.style.textAlign= 'center';
    textoInferior.style.textAlign= 'center';
})
botonAlignRight.addEventListener('click',()=>{
    textoSuperior.style.textAlign= 'right';
    textoInferior.style.textAlign= 'right';
})

//Input para color de letra y color de fondo de letra
const inputColorTexto = document.getElementById('input-color-texto');
const inputColorFondoTexto = document.getElementById('input-color-fondo-texto');
const spanColorTexto= document.getElementById('span-color-texto');
const spanColorFondoTexto= document.getElementById('span-color-fondo-texto');
inputColorTexto.addEventListener('input', (event)=>{
    const colorTexto = event.target.value;
    textoSuperior.style.color= colorTexto;
    textoInferior.style.color= colorTexto;
    spanColorTexto.innerText= colorTexto.toUpperCase();
})
inputColorFondoTexto.addEventListener('input', (event)=>{
    const colorFondoTexto = event.target.value;
    textoSuperior.style.backgroundColor= colorFondoTexto;
    textoInferior.style.backgroundColor= colorFondoTexto;
    spanColorFondoTexto.innerText= colorFondoTexto.toUpperCase();})

//Input fondo transparente 
const checkboxFondoTransparente= document.getElementById('checkbox-fondo-transparente')
checkboxFondoTransparente.addEventListener('click',()=>{
    if (checkboxFondoTransparente.checked){
        textoInferior.style.backgroundColor='transparent';
        textoSuperior.style.backgroundColor= 'transparent';
    }
    else{
        textoSuperior.style.backgroundColor= inputColorFondoTexto.value;
        textoInferior.style.backgroundColor= inputColorFondoTexto.value;
    }
})

//Contorno para las letras
const botonContornoNinguno = document.getElementById('boton-contorno-ninguno');
const botonContornoClaro = document.getElementById('boton-contorno-claro');
const botonContornoOscuro = document.getElementById('boton-contorno-oscuro');
botonContornoOscuro.addEventListener('click', ()=>{
    textoSuperior.style.textShadow = '2px 2px black, -2px 2px black, 2px -2px black, -2px -2px black';
    textoInferior.style.textShadow = '2px 2px black, -2px 2px black, 2px -2px black, -2px -2px black';
})
botonContornoClaro.addEventListener('click', ()=>{
    textoSuperior.style.textShadow = '2px 2px white, -2px 2px white, 2px -2px white, -2px -2px white';
    textoInferior.style.textShadow = '2px 2px white, -2px 2px white, 2px -2px white, -2px -2px white';
})
botonContornoNinguno.addEventListener('click', ()=>{
    textoSuperior.style.textShadow = 'unset';
    textoInferior.style.textShadow = 'unset';
})

//Input espaciado 
const inputEspaciado = document.getElementById('input-espaciado');
inputEspaciado.addEventListener('input', event =>{
    const espaciado = event.target.value;
    textoSuperior.style.padding= `${espaciado}px`;
    textoInferior.style.padding= `${espaciado}px`;
})

//Input interlineado
const selectInterlineado = document.getElementById('select-interlineado');
selectInterlineado.addEventListener('input',event =>{
    const interlineado = event.target.value;
    textoSuperior.style.lineHeight= interlineado;
    textoInferior.style.lineHeight= interlineado;
})

//Boton descarga
const botonGuardarImagen = document.getElementById('boton-guardar-imagen');
const contenedorImagen= document.getElementById('contenedor-imagen');
botonGuardarImagen.addEventListener('click', ()=>{
    domtoimage.toBlob(contenedorImagen).then((blob) => saveAs(blob, 'mi-meme.png'))
})

    
//Boton modo claro
const botonModoClaro = document.getElementById('boton-modo-claro');
const botonModoOscuro= document.getElementById('boton-modo-oscuro');
const panelEstilado = document.getElementById('panel-estilado');
const header = document.getElementById('header');
const contenedorInputColorFondo= document.getElementById('contenedor-input-color-fondo');
const contenedorColorTexto = document.getElementById('contenedor-color-texto');
const contenedorColorFondoTexto = document.getElementById('contenedor-color-fondo-texto');
botonModoClaro.addEventListener('click',() =>{
    botonModoOscuro.style.display= 'inline-block';
    botonModoClaro.style.display='none';
    header.classList.add('violeta-tono-1');
    document.body.classList.add('violeta-tono-2');
    botonPanelImagen.classList.add('violeta-tono-2');
    botonPanelTexto.classList.add('violeta-tono-2');
    botonGuardarImagen.classList.add('blanco');
    panelEstilado.classList.add('violeta-tono-3');
    inputURL.classList.add('blanco');
    contenedorInputColorFondo.classList.add('blanco');
    selectFiltros.classList.add('blanco');
    valorColorFondo.classList.add('blanco');
    pointsBrillo.classList.add('blanco');
    pointsOpacidad.classList.add('blanco');
    pointsContraste.classList.add('blanco');
    pointsDesenfoque.classList.add('blanco');
    pointsGrises.classList.add('blanco');
    pointsSepia.classList.add('blanco');
    pointsHUE.classList.add('blanco');
    pointsSaturado.classList.add('blanco');
    pointsNegativo.classList.add('blanco');
    botonRestablecerFiltros.classList.add('blanco');
    textareaSuperior.classList.add('blanco');
    textareaInferior.classList.add('blanco');
    selectFuentes.classList.add('blanco');
    inputTamanioLetra.classList.add('blanco');
    botonAlignCenter.classList.add('blanco');
    botonAlignLeft.classList.add('blanco');
    botonAlignRight.classList.add('blanco');
    contenedorColorFondoTexto.classList.add('blanco');
    contenedorColorTexto.classList.add('blanco');
    spanColorTexto.classList.add('blanco');
    spanColorFondoTexto.classList.add('blanco');
    botonContornoClaro.classList.add('blanco');
    botonContornoOscuro.classList.add('blanco');
    botonContornoNinguno.classList.add('blanco');
    inputEspaciado.classList.add('blanco');
    selectInterlineado.classList.add('blanco');
})
botonModoOscuro.addEventListener('click', () =>{
    botonModoClaro.style.display= 'inline-block';
    botonModoOscuro.style.display='none';    
    header.classList.remove('violeta-tono-1');
    document.body.classList.remove('violeta-tono-2');
    botonPanelImagen.classList.remove('violeta-tono-2');
    botonPanelTexto.classList.remove('violeta-tono-2');
    botonGuardarImagen.classList.remove('blanco');
    panelEstilado.classList.remove('violeta-tono-3');
    inputURL.classList.remove('blanco');
    contenedorInputColorFondo.classList.remove('blanco');
    selectFiltros.classList.remove('blanco');
    valorColorFondo.classList.remove('blanco');
    pointsBrillo.classList.remove('blanco');
    pointsOpacidad.classList.remove('blanco');
    pointsContraste.classList.remove('blanco');
    pointsDesenfoque.classList.remove('blanco');
    pointsGrises.classList.remove('blanco');
    pointsSepia.classList.remove('blanco');
    pointsHUE.classList.remove('blanco');
    pointsSaturado.classList.remove('blanco');
    pointsNegativo.classList.remove('blanco');
    botonRestablecerFiltros.classList.remove('blanco');
    textareaSuperior.classList.remove('blanco');
    textareaInferior.classList.remove('blanco');
    selectFuentes.classList.remove('blanco');
    inputTamanioLetra.classList.remove('blanco');
    botonAlignCenter.classList.remove('blanco');
    botonAlignLeft.classList.remove('blanco');
    botonAlignRight.classList.remove('blanco');
    contenedorColorFondoTexto.classList.remove('blanco');
    contenedorColorTexto.classList.remove('blanco');
    spanColorTexto.classList.remove('blanco');
    spanColorFondoTexto.classList.remove('blanco');
    botonContornoClaro.classList.remove('blanco');
    botonContornoOscuro.classList.remove('blanco');
    botonContornoNinguno.classList.remove('blanco');
    inputEspaciado.classList.remove('blanco');
    selectInterlineado.classList.remove('blanco');
})

// boton para cerrar el panel


const botonPanelCierre = document.getElementById('boton-panel-cierre');
console.log(botonPanelCierre)
botonPanelCierre.addEventListener("click", ()=>{
    panelEstilado.style.display="none";
})

botonPanelImagen.addEventListener("click", () =>{
panelEstilado.style.display= "flex";
})
botonPanelTexto.addEventListener("click", () =>{
    panelEstilado.style.display= "flex";
    })
