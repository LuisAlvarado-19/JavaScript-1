// 0 3 5 8 10 13 15 18 20
let contador = 0;
let serie = 0;

while(serie < 150){
let ImPar = contador % 2;
    if(ImPar){
      serie += 2;
    } else{
        serie +=3;
    }
    contador++;
}
alert(contador);