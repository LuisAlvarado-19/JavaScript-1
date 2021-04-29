var suma=0;

for(var i=0; i < 5; i++){
    suma += 3;
}

var array = [1, 2, 3, 4, 5];
var sumaArray = 0;
for(var i = 0; i < 5; i++){
    sumaArray += array[i];
}

var arrayMulti = [[1,2,3],[4,5,6],[7,8,9]];
sumaMulti=0;
for(var i=0; i<3; i++){
    for(var j=0; j<3; j++){
        sumaMulti += arrayMulti[i][j];
    }
}
alert(sumaMulti);