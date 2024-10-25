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
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        trPaciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida");
        alturaEhValida = false
        tdImc.textContent = "Altura Inválida";
        trPaciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = (peso / (altura * altura));
        tdImc.textContent = imc.toFixed(2); 
    }
}
