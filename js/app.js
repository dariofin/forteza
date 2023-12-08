const fondoImg = document.getElementById("fondo-imagen");
const botonFlecha = document.getElementById("flecha-abajo");
const flechaSVG = document.getElementById("flecha-svg");
const headerLogo = document.getElementById("logo-central-div");
// console.log(fondo.style);

// contenedorP.style.backgroundPositionY = "-200vh";

function botonFlechaEvent(e) {
	// contenedorP.style.backgroundPositionY = "-200vh";
	fondoImg.style.opacity = "0";
	flechaSVG.style.translate = "0 50px";
	headerLogo.style.scale = "0.8";
}

botonFlecha.addEventListener("click", botonFlechaEvent);
console.log(botonFlecha.innerHTML);
