const contenedorP = document.getElementById("contenedor-principal");
const botonFlecha = document.getElementById("flecha-abajo");

// console.log(fondo.style);

// contenedorP.style.backgroundPositionY = "-200vh";

function botonFlechaEvent(e) {
	contenedorP.style.backgroundPositionY = "-200vh";
}

botonFlecha.addEventListener("click", botonFlechaEvent);
