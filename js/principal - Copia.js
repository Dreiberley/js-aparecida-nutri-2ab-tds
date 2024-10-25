var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var trPacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < trPacientes.length; i++) {

    var trPaciente = trPacientes[i];

    var tdPeso = trPaciente.querySelector(".info-peso");
    var tdAltura = trPaciente.querySelector(".info-altura");
    var tdImc = trPaciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        // console.log("Peso inválido!");
        // tdPeso.textContent = "Peso inválido";
        pesoEhValido = false;
        // trPaciente.style.backgroundColor = "red";
        trPaciente.classList.add("paciente-invalido");
        tdPeso.classList.add("peso-invalido");
        // tdImc.textContent = "Peso Inválido";
    }

    if (altura <= 0 || altura >= 3.00) {
        // console.log("Altura inválida");
        // tdAltura.textContent = "Altura inválida";
        alturaEhValida = false
        // trPaciente.style.backgroundColor = "red";
        trPaciente.classList.add("paciente-invalido");
        tdAltura.classList.add("altura-invalida");
        // tdImc.textContent = "Altura Inválida";
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = (peso / (altura * altura));
        tdImc.textContent = imc.toFixed(2); 
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}
