const form = document.getElementById("form");
const jugador1 = document.getElementById("nameJ1");
const jugador2 = document.getElementById("nameJ2");
const infoTurno = document.getElementById("infoTurno");
const boton1 = document.getElementById("b1");
const boton2 = document.getElementById("b2");
const boton3 = document.getElementById("b3");
const boton4 = document.getElementById("b4");
const boton5 = document.getElementById("b5");
const boton6 = document.getElementById("b6");
const boton7 = document.getElementById("b7");
const boton8 = document.getElementById("b8");
const boton9 = document.getElementById("b9");
let iniciarJuego = false;

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(jugador1.value.length < 1 || jugador2.value.length < 1){
        alert("Debe ingresar el nombre de ambos jugadores")
    }else{
        iniciarJuego = true;
    }
})

