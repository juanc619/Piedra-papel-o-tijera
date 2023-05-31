let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let eligeTuArma = document.querySelector("#elige-tu-arma");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno (e) {
    let eleccionPC = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;
    

    // piedra => 0
    // papel => 1
    // tijera => 2

    if(eleccionPC === 0) {
        eleccionPC = "piedra✊";
    } else if (eleccionPC === 1) {
        eleccionPC = "papel📄";
    }else if (eleccionPC === 2) {
        eleccionPC = "tijera✂"
    }

    // piedra vence a tijera
    // tijera vence a papel
    // papel vence a piedra
    // si son iguales es empate

    if (
        (eleccionUsuario === "piedra✊" && eleccionPC === "tijera✂") ||
        (eleccionUsuario === "tijera✂" && eleccionPC === "papel📄") ||
        (eleccionUsuario === "papel📄" && eleccionPC === "piedra✊")
    ) {
        ganaUsuario();
    }else if (
        (eleccionPC === "piedra✊" && eleccionUsuario === "tijera✂") ||
        (eleccionPC === "tijera✂" && eleccionUsuario === "papel📄") ||
        (eleccionPC === "papel📄" && eleccionUsuario === "piedra✊")
    ) {
        ganaPc();
    }else {
        empate();
    }

}

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "¡Ganaste un punto! 🔥"
}

function ganaPc() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡La computadora gano un punto! 😥"
}

function empate() {
    contenedorGanaPunto.innerText = "¡Empate! 😱"
}


