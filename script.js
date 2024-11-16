let sliderEle = document.getElementById("slider");
let arrowEle = document.getElementById("arrow");
let r2Ele = document.getElementById("r2-value");
let loadingEle = document.getElementById("loading-overlay");
let workingEle = document.getElementById("working");
let emfInput = document.getElementById("emf-input");
let r1Input = document.getElementById("r-input");
let r2Input = document.getElementById("r2-input");

const r2max = 50;
const r2min = 0;

const r2range = r2max-r2min;

var r1 = Number(r1Input.value);
var r2 = Number(r2Input.value);
var emf = Number(emfInput.value);

updateMaths(true)

slider.oninput = (ev) => {
	arrowEle.style.bottom = String(91 + Number(sliderEle.value)) + "px";

	// calc r2
	r2 = Math.round(r2min + r2range*(slider.value/192)*100)/100;

	r2Input.value = r2
	updateMaths()
}

r2Input.oninput = (ev) => {
	
	// calc r2
	r2 = r2Input.value;
	
	slider.value = (r2 - r2min)/r2range*192

	arrowEle.style.bottom = String(91 + Number(sliderEle.value)) + "px";
	updateMaths()
}


emfInput.oninput = (ev) => {
	console.log(emfInput.value)
	emf = Number(emfInput.value);
	
	updateMaths()
}

r1Input.oninput = (ev) => {
	console.log(r1Input.value)
	r1 = Number(r1Input.value);
	
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