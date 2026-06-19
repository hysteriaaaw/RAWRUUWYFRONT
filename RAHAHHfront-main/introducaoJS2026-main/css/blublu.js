   
    
function calcularTodosOsIMCs() {
      
    let pacientes = document.querySelectorAll(".paciente");

    
    for (let i = 0; i < pacientes.length; i++) {
        let paciente = pacientes[i];

        let peso = parseFloat(paciente.querySelector(".info-peso").textContent);
        let altura = parseFloat(paciente.querySelector(".info-altura").textContent);
      
        if (peso > 0 && altura > 0) {
          
            let imc = peso / (altura * altura);

     
            paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
        } else {
            paciente.querySelector(".info-imc").textContent = "Dados inválidos";
        }
    }
}