
// slider Animation
var sliderMensageImage = document.querySelector('.sliderMensage__image');
var sliderMensageInput = document.querySelector('.sliderMensage__input');

function handleSliderMensageInput() {
    
    var index = sliderMensageInput.value;
    
    sliderMensageImage.setAttribute('src', '/images/carta' + index + '.png');
}
handleSliderMensageInput();
sliderMensageInput.addEventListener('input', handleSliderMensageInput);

//slider Tabla de propiedades 
var buttonImage=document.querySelector('especificaciones__image');
var buttonTableD=document.querySelector('.dimensiones');
var buttonTableP=document.querySelector('.poliester');
var buttonTableA=document.querySelector('.algodon');
var buttonIzq=document.querySelector('.btnIzq');
var buttonIzq=document.querySelector('.btnDer');

function handleButton(){
    var index = buttonIzq.
    buttonImage.setAttribute('src', '/images/peluche' + index + '.png');
}

buttonImage.addEventListener('click', handleButton);