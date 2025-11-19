

const ķermeņaGarums = document.getElementById("garums");
const ķermeņaSvars = document.getElementById("svars");
const calcButton = document.getElementById("calc");
const rezultātaAprēķins = document.getElementById("output");
const rezultātaAprēķins2 = document.getElementById("output2");

calcButton.addEventListener('click', handleClick);

function handleClick() {

const garums = ķermeņaGarums.value;
const svars = ķermeņaSvars.value;

rezultātaAprēķins.innerHTML = svars/(garums/100);

if(rezultātaAprēķins <= 18,5) {
   rezultātaAprēķins2.innerHTML = "Nepietiekama ķermeņa masa"
} 
if(rezultātaAprēķins >= 18,5) {
   rezultātaAprēķins2.innerHTML = "Normāla ķermeņa masa"
}
if(rezultātaAprēķins >= 25) {
   rezultātaAprēķins2.innerHTML = "Lieka ķermeņa masa"
}
if(rezultātaAprēķins >= 30) {
   rezultātaAprēķins2.innerHTML = "Aptaukošanās"
}

}

