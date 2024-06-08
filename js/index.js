let usuarios = [];
let menu;
const fecha = new Date()

function saludar(mensaje){
    alert(mensaje);
}

function separador(texto){
    console.log(texto)
}

class Usuario{
    constructor(nombre, categoria, horas, antiguedad, descuentos, total){
        this.nombre = nombre;
        this.categoria = categoria;
        this.horas = horas;
        this.antiguedad = antiguedad;
        this.descuentos = descuentos;
        this.total = total;
    }
}

saludar((fecha.toLocaleDateString()) +'\nBienvenido al sistema de calculo de sueldos ')

while(menu != 0){
    let menu = prompt('Ingrese una opcion \n 1- Ingresar datos de usuarios \n 2 - Ver Listado de usuarios \n 3 - Eliminar usuarios de la lista \n 0 - Salir');
    if (menu == 1){ // Carga de datos para objetos del array
        let nombre = prompt('Ingrese nombre');
        let categoria = prompt(nombre +' Ingrese su valor hora de categoria');
        let horas = prompt(nombre +' Ingrese la cantidad de horas trabajadas');
        let antiguedad = prompt(nombre +' Ingrese la cantidad de años de antiguedad');
        let descuentos = prompt(nombre +' Ingrese el porcentaje de descuentos por aportes');
        let total = ((a,b,c,d) => ((a*b)+(a/b*c) - d));
        let guardarDatos = new Usuario(nombre, categoria, horas, antiguedad, descuentos, Math.trunc(total(categoria,horas,antiguedad,descuentos)));
        usuarios.push(guardarDatos);
        alert('El monto a cobrar por mes del usuario ' + nombre + ' es: ' + '$' + Math.trunc(total(categoria,horas,antiguedad,descuentos))+'-.');
        console.log('El monto a cobrar por mes del usuario ' + nombre + ' es: ' + '$' + Math.trunc(total(categoria,horas,antiguedad,descuentos))+'-.');
    } else if (menu == 2){
        if (usuarios == ''){
            alert('Listado de usuarios vacia')
        }else{
                separador('---------------------------------------')
                usuarios.forEach(function (nombre, total, array){
                console.log(nombre, total, array);
            });
        }
    } else if (menu == 3){
        let eliminaUsuario = prompt('Ingrese el indice de usuario que desea eliminar')
        if (eliminaUsuario == ''){
            alert('Dato no valido')
        }else{
            delete(usuarios[eliminaUsuario])
            alert('Usuario con indice #'+eliminaUsuario+ ' fue eliminado')
            separador('---------------------------------------')
            usuarios.forEach(function (nombre, total, array){
                console.log(nombre, total, array);
            });
        }
    }else if(menu == ''){
        console.log('No es valido');
    } else if(menu == 0) {
        alert('Gracias por utilizar el simulador de sueldos');
        break;
    }
}

