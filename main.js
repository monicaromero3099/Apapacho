
// slider Animation
var sliderMensageImage = document.querySelector('.sliderMensage__image');
var sliderMensageInput = document.querySelector('.sliderMensage__input');

function handleSliderMensageInput() {
    
    var index = sliderMensageInput.value;
    
    sliderMensageImage.setAttribute('src', '/images/carta' + index + '.png');
}
handleSliderMensageInput();
sliderMensageInput.addEventListener('input', handleSliderMensageInput);
