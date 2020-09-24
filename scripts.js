const form = document.getElementById("form");
const jugador1 = document.getElementById("nameJ1");
const jugador2 = document.getElementById("nameJ2");
const infoTurno = document.getElementById("infoTurno");
let turno = "j1";
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
let contadorCasillasMarcadas = 0;

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(jugador1.value.length < 1 || jugador2.value.length < 1){
        alert("Debe ingresar el nombre de ambos jugadores")
    }else{
        iniciarJuego = true;
        infoTurno.textContent = `Turno de ${jugador1.value}`
    }
})

boton1.addEventListener("click", (e)=>{
    if(iniciarJuego){
        if(turno == "j1"){
            if(e.target.value == ""){
                e.target.value = "X";
                turno = "j2";
                infoTurno.textContent = `Turno de ${jugador2.value}`;
                contadorCasillasMarcadas++;
                corroborarGanador(e.target.value)
            }else{
                infoTurno.textContent = "Esa casilla esta ocupada"
            }
        }else{
            if(e.target.value == ""){
                e.target.value = "O";
                turno = "j1";
                infoTurno.textContent = `Turno de ${jugador1.value}`;
                contadorCasillasMarcadas++;
                corroborarGanador(e.target.value)
            }else{
                infoTurno.textContent = "Esa casilla esta ocupada"
            }
        }
    }else{
        alert("Debe ingresar el nombre de ambos jugadores")
    }
})
boton2.addEventListener("click", (e)=>{
    if(iniciarJuego){
        if(turno == "j1"){
            if(e.target.value == ""){
                e.target.value = "X";
                turno = "j2";
                infoTurno.textContent = `Turno de ${jugador2.value}`;
                contadorCasillasMarcadas++;
                corroborarGanador(e.target.value)
            }else{
                infoTurno.textContent = "Esa casilla esta ocupada"
            }
        }else{
            if(e.target.value == ""){
                e.target.value = "O";
                turno = "j1";
                infoTurno.textContent = `Turno de ${jugador1.value}`;
                contadorCasillasMarcadas++;
                corroborarGanador(e.target.value)
            }else{
                infoTurno.textContent = "Esa casilla esta ocupada"
            }
        }
    }else{
        alert("Debe ingresar el nombre de ambos jugadores")
    }
})
boton3.addEventListener("click", (e)=>{
    if(iniciarJuego){
        if(turno == "j1"){
            if(e.target.value == ""){
                e.target.value = "X";
                turno = "j2";
                infoTurno.textContent = `Turno de ${jugador2.value}`;
                contadorCasillasMarcadas++;
                corroborarGanador(e.target.value)
            }else{
                infoTurno.textContent = "Esa casilla esta ocupada"
            }
        }else{
            if(e.target.value == ""){
                e.target.value = "O";
                turno = "j1";
                infoTurno.textContent = `Turno de ${jugador1.value}`;
                contadorCasillasMarcadas++;
                corroborarGanador(e.target.value)
            }else{
                infoTurno.textContent = "Esa casilla esta ocupada"
            }
        }
    }else{
        alert("Debe ingresar el nombre de ambos jugadores")
    }
})
boton4.addEventListener("click", (e)=>{
    if(iniciarJuego){
        if(turno == "j1"){
            if(e.target.value == ""){
                e.target.value = "X";
                turno = "j2";
                infoTurno.textContent = `Turno de ${jugador2.value}`;
                contadorCasillasMarcadas++;
                corroborarGanador(e.target.value)
            }else{
                infoTurno.textContent = "Esa casilla esta ocupada"
            }
        }else{
            if(e.target.value == ""){
                e.target.value = "O";
                turno = "j1";
                infoTurno.textContent = `Turno de ${jugador1.value}`;
                contadorCasillasMarcadas++;
                corroborarGanador(e.target.value)
            }else{
                infoTurno.textContent = "Esa casilla esta ocupada"
            }
        }
    }else{
        alert("Debe ingresar el nombre de ambos jugadores")
    }
})
boton5.addEventListener("click", (e)=>{
    if(iniciarJuego){
        if(turno == "j1"){
            if(e.target.value == ""){
                e.target.value = "X";
                turno = "j2";
                infoTurno.textContent = `Turno de ${jugador2.value}`;
                contadorCasillasMarcadas++;
                corroborarGanador(e.target.value)
            }else{
                infoTurno.textContent = "Esa casilla esta ocupada"
            }
        }else{
            if(e.target.value == ""){
                e.target.value = "O";
                turno = "j1";
                infoTurno.textContent = `Turno de ${jugador1.value}`;
                contadorCasillasMarcadas++;
                corroborarGanador(e.target.value)
            }else{
                infoTurno.textContent = "Esa casilla esta ocupada"
            }
        }
    }else{
        alert("Debe ingresar el nombre de ambos jugadores")
    }
})
boton6.addEventListener("click", (e)=>{
    if(iniciarJuego){
        if(turno == "j1"){
            if(e.target.value == ""){
                e.target.value = "X";
                turno = "j2";
                infoTurno.textContent = `Turno de ${jugador2.value}`;
                contadorCasillasMarcadas++;
                corroborarGanador(e.target.value)
            }else{
                infoTurno.textContent = "Esa casilla esta ocupada"
            }
        }else{
            if(e.target.value == ""){
                e.target.value = "O";
                turno = "j1";
                infoTurno.textContent = `Turno de ${jugador1.value}`;
                contadorCasillasMarcadas++;
                corroborarGanador(e.target.value)
            }else{
                infoTurno.textContent = "Esa casilla esta ocupada"
            }
        }
    }else{
        alert("Debe ingresar el nombre de ambos jugadores")
    }
})
boton7.addEventListener("click", (e)=>{
    if(iniciarJuego){
        if(turno == "j1"){
            if(e.target.value == ""){
                e.target.value = "X";
                turno = "j2";
                infoTurno.textContent = `Turno de ${jugador2.value}`;
                contadorCasillasMarcadas++;
                corroborarGanador(e.target.value)
            }else{
                infoTurno.textContent = "Esa casilla esta ocupada"
            }
        }else{
            if(e.target.value == ""){
                e.target.value = "O";
                turno = "j1";
                infoTurno.textContent = `Turno de ${jugador1.value}`;
                contadorCasillasMarcadas++;
                corroborarGanador(e.target.value)
            }else{
                infoTurno.textContent = "Esa casilla esta ocupada"
            }
        }
    }else{
        alert("Debe ingresar el nombre de ambos jugadores")
    }
})
boton8.addEventListener("click", (e)=>{
    if(iniciarJuego){
        if(turno == "j1"){
            if(e.target.value == ""){
                e.target.value = "X";
                turno = "j2";
                infoTurno.textContent = `Turno de ${jugador2.value}`;
                contadorCasillasMarcadas++;
                corroborarGanador(e.target.value)
            }else{
                infoTurno.textContent = "Esa casilla esta ocupada"
            }
        }else{
            if(e.target.value == ""){
                e.target.value = "O";
                turno = "j1";
                infoTurno.textContent = `Turno de ${jugador1.value}`;
                contadorCasillasMarcadas++;
                corroborarGanador(e.target.value)
            }else{
                infoTurno.textContent = "Esa casilla esta ocupada"
            }
        }
    }else{
        alert("Debe ingresar el nombre de ambos jugadores")
    }
})
boton9.addEventListener("click", (e)=>{
    if(iniciarJuego){
        if(turno == "j1"){
            if(e.target.value == ""){
                e.target.value = "X";
                turno = "j2";
                infoTurno.textContent = `Turno de ${jugador2.value}`;
                contadorCasillasMarcadas++;
                corroborarGanador(e.target.value)
            }else{
                infoTurno.textContent = "Esa casilla esta ocupada"
            }
        }else{
            if(e.target.value == ""){
                e.target.value = "O";
                turno = "j1";
                infoTurno.textContent = `Turno de ${jugador1.value}`;
                contadorCasillasMarcadas++;
                corroborarGanador(e.target.value)
            }else{
                infoTurno.textContent = "Esa casilla esta ocupada"
            }
        }
    }else{
        alert("Debe ingresar el nombre de ambos jugadores")
    }
})


/*Funcion para corroborar si hubo un ganador*/

const corroborarGanador = (v)=>{
    if(boton1.value == v && boton2.value == v && boton3.value == v){
        if(v == "X"){
            infoTurno.textContent = `Victoria de ${jugador1.value}!!`
        }else{
            infoTurno.textContent = `Victoria de ${jugador2.value}!!`
        }
        boton1.classList.add("ganadorJuego");
        boton2.classList.add("ganadorJuego");
        boton3.classList.add("ganadorJuego");
        iniciarJuego = false;
    }else if(boton4.value == v && boton5.value == v && boton6.value == v){
        if(v == "X"){
            infoTurno.textContent = `Victoria de ${jugador1.value}!!`
        }else{
            infoTurno.textContent = `Victoria de ${jugador2.value}!!`
        }
        boton4.classList.add("ganadorJuego");
        boton5.classList.add("ganadorJuego");
        boton6.classList.add("ganadorJuego");
        iniciarJuego = false;
    }else if(boton7.value == v && boton8.value == v && boton9.value == v){
        if(v == "X"){
            infoTurno.textContent = `Victoria de ${jugador1.value}!!`
        }else{
            infoTurno.textContent = `Victoria de ${jugador2.value}!!`
        }
        boton7.classList.add("ganadorJuego");
        boton8.classList.add("ganadorJuego");
        boton9.classList.add("ganadorJuego");
        iniciarJuego = false;
    }else if(boton1.value == v && boton4.value == v && boton7.value == v){
        if(v == "X"){
            infoTurno.textContent = `Victoria de ${jugador1.value}!!`
        }else{
            infoTurno.textContent = `Victoria de ${jugador2.value}!!`
        }
        boton1.classList.add("ganadorJuego");
        boton4.classList.add("ganadorJuego");
        boton7.classList.add("ganadorJuego");
        iniciarJuego = false;
    }else if(boton2.value == v && boton5.value == v && boton8.value == v){
        if(v == "X"){
            infoTurno.textContent = `Victoria de ${jugador1.value}!!`
        }else{
            infoTurno.textContent = `Victoria de ${jugador2.value}!!`
        }
        boton2.classList.add("ganadorJuego");
        boton5.classList.add("ganadorJuego");
        boton8.classList.add("ganadorJuego");
        iniciarJuego = false;
    }else if(boton3.value == v && boton6.value == v && boton9.value == v){
        if(v == "X"){
            infoTurno.textContent = `Victoria de ${jugador1.value}!!`
        }else{
            infoTurno.textContent = `Victoria de ${jugador2.value}!!`
        }
        boton3.classList.add("ganadorJuego");
        boton6.classList.add("ganadorJuego");
        boton9.classList.add("ganadorJuego");
        iniciarJuego = false;
    }else if(boton1.value == v && boton5.value == v && boton9.value == v){
        if(v == "X"){
            infoTurno.textContent = `Victoria de ${jugador1.value}!!`
        }else{
            infoTurno.textContent = `Victoria de ${jugador2.value}!!`
        }
        boton1.classList.add("ganadorJuego");
        boton5.classList.add("ganadorJuego");
        boton9.classList.add("ganadorJuego");
        iniciarJuego = false;
    }else if(boton3.value == v && boton5.value == v && boton7.value == v){
        if(v == "X"){
            infoTurno.textContent = `Victoria de ${jugador1.value}!!`
        }else{
            infoTurno.textContent = `Victoria de ${jugador2.value}!!`
        }
        boton3.classList.add("ganadorJuego");
        boton5.classList.add("ganadorJuego");
        boton7.classList.add("ganadorJuego");
        iniciarJuego = false;
    }else if(contadorCasillasMarcadas == 9){
        infoTurno.textContent = "El juego termino empatado";
        iniciarJuego = false;
    }
}

