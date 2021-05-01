var serie = 0;
var denominador = 1;
var resultado = 1;
var bandera = 0;
var iterador=0;

while (resultado>0.0005){
    
    bandera = iterador % 2;
    
    if (bandera == 0){
        serie +=4/denominador;
        resultado = serie - pi;
    } else {
        serie -=4/denominador;
        resultado = pi - serie;
    }
    
    denominador += 2;
    iterador++;

}

alert(`La cantidad de veces que toco iterar para acercarse a un valor de 0.0005 de pi fueron: ${iterador}`);
