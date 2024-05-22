let menu;
let sueldo = 0;
let horasTrabajadas = 0;
let categoria;
let aportes = 0;
let antiguedad = 0;
let calculoHorasTrab = 0;
let calculoTotal = 0;
let sueldoCategoria;
let calculoAntiguedad;

//funciones
function saludar(mensaje){
    alert(mensaje)
}
function sumar(a,b){
    return a + b
}

function multiplicar(a,b){
    return a * b
}

function dividirMultiplicar(a,b,c){
    return a / b * c 
}


saludar('Bienvenido al sistema de calculo de sueldos')
while(menu != 0){
    menu = prompt('Ingrese una opcion: \n1- Categoria: ' + '$ ' + sueldo + '.-' + '\n2- Horas Trabajadas: ' + horasTrabajadas + 'hs'+ '\n3- Antiguedad: ' + antiguedad+ ' años' +' \n4- Descuentos: ' + aportes + '%' +' \n*- Neto a Recibir: $' + calculoTotal + '.-' +' \n0- Salir');
    if(menu == 1){
        categoria = Number(prompt('Ingrese el valor hora de su categoria \n $' + sueldo+'.-'));
        sueldoCategoria = sueldo += categoria;
        alert('Su valor hora por categoria es: $' + sueldoCategoria+'.-');
    } else if (menu == 2){
        horasTrabajadas = Number(prompt('Ingrese las horas trabajadas \n' + horasTrabajadas + 'hs'));
        calculoHorasTrab = multiplicar(categoria, horasTrabajadas);
        alert('Cantidad de horas trabajadas: ' + horasTrabajadas +'hs');
    } else if (menu == 3){
        antiguedad = Number(prompt('Ingrese la cantidad de años trabajados'));
        calculoAntiguedad = dividirMultiplicar(calculoHorasTrab, horasTrabajadas, antiguedad);
        alert('Cantidad de años trabajados: ' + antiguedad);
    } else if (menu == 4){
        aportes = Number(prompt('Ingrese el porcentaje de descuento de los aportes'));
        let totalSueldo = sumar(calculoHorasTrab, calculoAntiguedad); 
        calculoTotal = totalSueldo - (totalSueldo * aportes /100)
        alert('Usted aplico el ' + aportes +'% para los aportes.') 
    } else if (menu == 0) {
        alert('Gracias por utilizar el servicio \n-Eduardo Ezequiel Gomez \n-JavaScript #71340');
        break
    } else{
        alert('Opcion no valida.')
    }
}
