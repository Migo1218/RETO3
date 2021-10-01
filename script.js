function calcularImc(){
    let edad = document.getElementById("edad").value
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let h3 = document.getElementById("resultado")
    let h2 = document.getElementById("titulo")
    let hombre = document.getElementById("hombre").checked
    let mujer = document.getElementById("mujer").checked

    h2.innerHTML = "Resultado"

    const storage = window.localStorage;
    storage.setItem('edad', edad);
    storage.setItem('peso', peso);
    storage.setItem('altura', altura);
    if(hombre){
        storage.setItem('sexo', "Hombre")
    }else{
        storage.setItem('sexo', "Mujer")
    }
    
    

    calculo = peso / Math.pow(altura, 2)

    h3.innerHTML = calculo.toFixed(2)
    

}

const jsonData = JSON.parse(data).imc;

let promedio = 0

jsonData.forEach(function calcularPromedio(valor , indice){
    promedio = promedio + valor / jsonData.length

});

let resultado = document.getElementById("resultado")
resultado.innerHTML = promedio.toFixed(2)



