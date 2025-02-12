let altura = document.querySelector('#altura')
let nome = document.querySelector('#nome')
let peso = document.querySelector('#peso')
let areaResultado = document.querySelector('.resultado')

document.querySelector('#altura').addEventListener('input', function () {
    let value = this.value;

    // Remove tudo que não for número
    value = value.replace(/[^0-9]/g, '');

    // Se o usuário digitar ao menos um número, adiciona automaticamente a vírgula antes dos dois últimos dígitos
    if (value.length > 1) {
        value = value.replace(/(\d+)(\d{2})$/, '$1.$2');
    }

    // Atualiza o campo com o valor formatado
    this.value = value;
});
document.querySelector('#peso').addEventListener('input', function () {
    let value = this.value;

    // Remove tudo que não for número
    value = value.replace(/[^0-9]/g, '');

    // Se o usuário digitar ao menos um número, adiciona automaticamente a vírgula antes dos dois últimos dígitos
    if (value.length > 1) {
        value = value.replace(/(\d+)(\d{3})$/, '$1.$2');
    }

    // Atualiza o campo com o valor formatado
    this.value = value;
});


document.querySelector('#altura').addEventListener('keydown', function (event) {
    if (!/[0-9.,]/.test(event.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)) {
        event.preventDefault();
    }
});
document.querySelector('#peso').addEventListener('keydown', function (event) {
    if (!/[0-9.,]/.test(event.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)) {
        event.preventDefault();
    }
});



document.querySelector('#verificar').addEventListener('click', () => {
    
    if (!altura.value || !nome.value || !peso.value) {
       return  alert('Insira valores em todos os campos')
    }
    areaResultado.innerHTML = ' '
    let alturaNumber = Number(altura.value)
    let pesoNumber = Number(peso.value)

    let imc = pesoNumber / (alturaNumber * alturaNumber)
    peso.value = ''
    altura.value = ''
    
    if (imc < 18.5) {
        let resultado = document.createElement('p')
        areaResultado.appendChild(resultado)
        return resultado.textContent = (`${nome.value} seu IMC é "${imc.toFixed(2)}" você está abaixo do peso`)
    } 
    if (imc >= 18.5 && imc <= 24.9) {
        let resultado = document.createElement('p')
        areaResultado.appendChild(resultado)
        return resultado.textContent =(`${nome.value} seu IMC é "${imc.toFixed(2)}" você está com o peso normal`)
    }
    if (imc >= 25 && imc < 30) {
        let resultado = document.createElement('p')
        areaResultado.appendChild(resultado)
        return resultado.textContent =(`${nome.value} seu IMC é "${imc.toFixed(2)}", você está com sobrepeso`)
    }
    if (imc >= 30 && imc < 40) {
        let resultado = document.createElement('p')
        areaResultado.appendChild(resultado)
        return resultado.textContent =(`${nome.value} seu IMC é "${imc.toFixed(2)}" você está com o obesidade Grau I`)
    }
    if (imc >= 40) {
        let resultado = document.createElement('p')
        areaResultado.appendChild(resultado)
        return resultado.textContent =(`${nome.value} seu IMC é "${imc.toFixed(2)}" você está com obesidade Grau II`)
    }
    
})