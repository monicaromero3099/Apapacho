
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
var buttonImage=document.querySelector('.especificaciones__image');
var buttonTableD=document.querySelector('.dimensiones');
var buttonTableP=document.querySelector('.poliester');
var buttonTableA=document.querySelector('.algodon');
var buttonIzq=document.querySelector('.btnIzq');
var buttonDer=document.querySelector('.btnDer');
var  quality = 1;

function handleButtonD(){

    quality++;
    buttonImage.setAttribute('src', '/images/peluche' +  quality + '.png');
    if(quality==6){
        quality=0;
    }

}
function handleButtonI(){

    quality--;
    buttonImage.setAttribute('src', '/images/peluche' +  quality + '.png');
    if(quality==1){
        quality=6;
    }

    console.log(quality);
}
handleButtonD();
handleButtonI();
buttonDer.addEventListener('click', handleButtonD);
buttonIzq.addEventListener('click', handleButtonI);
