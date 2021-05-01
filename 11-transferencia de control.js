let lista = [2, 4, 6, 8, 10];
let total = 0;

for (let i = 0; i < 5; i++ ){
    let numero = lista [i];
    if (numero == 6){
        continue;
        // con la palabra break rompe por completo el ciclo for una vez encuentra el valor que se le pidio
        // para ver el ejemplo cambiar el 6 por el 8
    }
    total += numero;
}
alert(total)