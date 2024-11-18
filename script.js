let sliderEle = document.getElementById("slider");
let arrowEle = document.getElementById("arrow");
let r2Ele = document.getElementById("r2-value");
let loadingEle = document.getElementById("loading-overlay");
let workingEle = document.getElementById("working");
let emfInput = document.getElementById("emf-input");
let maxInput = document.getElementById("rmax-input");
let minInput = document.getElementById("rmin-input");

var rmax = Number(maxInput.value);
var rmin = Number(minInput.value);

var rrange = rmax-rmin;

var r1 = Number(rmax);
var r2 = Number(rmin);
var emf = Number(emfInput.value);

updateMaths(true)

slider.oninput = (ev) => {
	arrowEle.style.bottom = String(91 + Number(sliderEle.value)) + "px";

	// calc r2
	r2 = Math.round(rmin + rrange*(Number(slider.value)/192)*100)/100;
	r1 = Math.round((rmax - r2)*100)/100
	//r2Input.value = r2
	updateMaths()
	console.log(r1, r2)
}

maxInput.oninput = (ev) => {
	rmax = Number(maxInput.value);
	rrange = rmax-rmin;
	r2 = Math.round(rmin + rrange*(Number(slider.value)/192)*100)/100;
	r1 = Math.round((rmax - r2)*100)/100

	updateMaths()
}

minInput.oninput = (ev) => {
	rmin = Number(minInput.value);
	rrange = rmax-rmin;
	r2 = Math.round(rmin + rrange*(Number(slider.value)/192)*100)/100;
	r1 = Math.round((rmax - r2)*100)/100

	updateMaths()
}


emfInput.oninput = (ev) => {
	//console.log(emfInput.value)
	emf = Number(emfInput.value);
	
	updateMaths()
}

function updateMaths(noupdate = null) {
	
	// r2Ele.innerHTML = `\\(R_2 = ${r2} Ω\\)`;
	
	workingEle.innerHTML = `<div>\\(V_{out} = {${r2} \\over {${r1}+${r2}}} \\times ${emf}\\)</div>
	<div>\\(V_{out} = ${Math.round(r2/(r1+r2)*100)/100} \\times ${emf}\\)</div>
	<div>\\(V_{out} = ${Math.round((r2/(r1+r2))*emf)}V\\)</div>`
	if (!noupdate) {
		MathJax.typeset();
	}
}