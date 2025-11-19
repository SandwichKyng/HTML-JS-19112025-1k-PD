

const ķermeņaGarums = document.getElementById("garums");
const ķermeņaSvars = document.getElementById("svars");
const calcButton = document.getElementById("calc");
const rezultātaAprēķins = document.getElementById("output");

calcButton.addEventListener('click', handleClick);

function handleClick() {

const NeĶM = 18.5
const NoĶM = 18.5
const LĶM = 25 
const A = 30

const garums = ķermeņaGarums.value;
const svars = ķermeņaSvars.value;

rezultātaAprēķins.innerHTML = svars/garums


}

if(rezultātaAprēķins <= 18,5) {
    
   rezultātaAprēķins.innerHTML = "Nepietiekama ķermeņa masa"
} else {
    rezultātaAprēķins.innerHTML = "Pietiekama ķermeņa masa"
}