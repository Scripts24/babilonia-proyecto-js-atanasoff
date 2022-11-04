const slider = document.querySelector("#slider");
let slider_section = document.querySelectorAll(".slider-section");
let slider_section_last = slider_section[slider_section.length - 1];//Llama a la última imagen para colocarla al principio del slider

const btn_left = document.querySelector("#btn-left");
const btn_right = document.querySelector("#btn-right");


//Método para colocar la última imagen al comienzo para que al mover el selector no haya un vacío
slider.insertAdjacentElement('afterbegin', slider_section_last);


//Función para mover hacia la derecha
function Derecha() {
    let slider_section_first = document.querySelectorAll(".slider-section")[0];//Obtiene al primer elemento
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', slider_section_first);//El métdodo coloca la primera imagen, antes que termine el slider, en el primer lugar
        slider.style.marginLeft = "-100%";
    }, 500);//misma duración que el style.transition
}

//Función para mover hacia la izquierda (misma funcionalidad que la anterior pero aplicada a la última imagen)
function Izquierda() {
    let slider_section = document.querySelectorAll(".slider-section");
    let slider_section_last = slider_section[slider_section.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', slider_section_last);
        slider.style.marginLeft = "-100%";
    }, 500);
}

//Evento click para hacer avanzar las imágenes manualmente
btn_right.addEventListener('click', function () {
    Derecha();
});

btn_left.addEventListener('click', function () {
    Izquierda();
});

//Intervalo para que el slider se ejecute automáticamente
setInterval(function () {
    Derecha();
}, 5000);

