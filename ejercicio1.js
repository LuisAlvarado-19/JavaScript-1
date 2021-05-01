let listado=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumaPar=0;
let contador =0;

for(let i = 0; i < 10; i++){
    if(listado[i] % 2){
       contador += listado[i];
       promedioImpar = contador / 5;
    
    }else{
        sumaPar += listado[i]
    }

}
// alert("La suma de numeros pares es " + sumaPar);
// alert("La suma de numeros impares es " + contador)
alert("El promedio de numeros impares es " + promedioImpar);



