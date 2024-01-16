const fondoImg = document.getElementById("bkground-img");
const flechaSVG = document.getElementById("flecha-svg");
const headerLogo = document.getElementById("logo-header");

console.log(headerLogo);

// contenedorP.style.backgroundPositionY = "-200vh";

function headerLogoEvent(e) {
	// contenedorP.style.backgroundPositionY = "-200vh";
	fondoImg.style.opacity = "0";
	// flechaSVG.style.translate = "0 50px";
	headerLogo.style.scale = "0.8";
}

headerLogo.addEventListener("click", headerLogoEvent);
// console.log(botonFlecha.innerHTML);
