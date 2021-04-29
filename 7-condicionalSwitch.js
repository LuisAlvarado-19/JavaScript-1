var producto=8;
var calificacion='';
var calificacionsw='';

if(producto==1){
    calificacion="Bueno"
}else if(producto==2){
    calificacion="Aceptable"
}else if(producto==3){
    calificacion="Malo"
}else{
    calificacion="Invalido"
};

switch(producto){
    case 1: {
    calificacionsw="Aceptable";
    break;
}
    case 2:{
        calificacionsw="Razonable";
    break;
}
    case 3:{
        calificacionsw="Malo"
        break;
    }
        default:{
            calificacionsw="Valor invalido"
            break;
        }

}
alert(calificacionsw);