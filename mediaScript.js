// var notaPrimeiroTrimestre = 2.6;
// var notaSegundoTrimestre = 8.2;
// var notaTerceiroTrimestre= 7;

// var notaFinal = notaPrimeiroTrimestre + notaSegundoTrimestre + notaTerceiroTrimestre;
    
// //console.log(notaFinal);

// var mediaFinal = notaFinal / 3;
// var mediaFinalFixada = mediaFinal.toFixed(1);

// console.log(mediaFinalFixada)

// if(mediaFinal >= 6){
//   console.log('Passou')
// }else if(mediaFinal <= 5.5){
//   console.log('Recuperação')
// }else if(mediaFinal > 5.5 || mediaFinal <= 5.9){
//   console.log('Passou por Conselho de Classe')
// }

function Calcule(){
    var elementoValor1 = document.getElementById('valor1');
    var elementoValor2 = document.getElementById('valor2');
    var elementoValor3 = document.getElementById('valor3');

    var notaPrimeiroTrimestre = elementoValor1.value;
    var notaSegundoTrimestre = elementoValor2.value;
    var notaTerceiroTrimestre = elementoValor3.value;

    var calculo1 = parseFloat(notaPrimeiroTrimestre);
    var calculo2 = parseFloat(notaSegundoTrimestre);
    var calculo3 = parseFloat(notaTerceiroTrimestre);

    var calculE = calculo1 + calculo2 + calculo3;
    var mediaFinal = calculE / 3;
    var resultado = document.getElementById('resultado');
    
    if(mediaFinal > 10 || mediaFinal < 0){
        resultado.innerHTML = "Médias de 0 a 10"
    }else if(mediaFinal >= 6){
        resultado.innerHTML = "Você Passou!"
    }else if(mediaFinal >= 5.5 && mediaFinal <=5.9){
        resultado.innerHTML = "Recuperação"
    }else if(mediaFinal < 5.5){
        resultado.innerHTML = "Perdeu, sem direito a recuperação"
    }
   console.log(mediaFinal);
}