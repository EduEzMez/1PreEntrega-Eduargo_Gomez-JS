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


while(menu != 0){
    menu = prompt('Ingrese una opcion: \n1- Categoria: ' + '$ ' + sueldo + '.-' + '\n2- Horas Trabajadas: ' + horasTrabajadas + 'hs'+ '\n3- Antiguedad: ' + antiguedad+ ' años' +' \n4- Descuentos: ' + aportes + '%' +' \n5- Neto a Recibir: $' + calculoTotal + '.-' +' \n0- Salir');
    if(menu == 1){
        categoria = Number(prompt('Ingrese el valor hora de su categoria \n $' + sueldo+'.-'));
        sueldoCategoria = sueldo += categoria;
        alert('Su valor hora por categoria es: $' + sueldoCategoria+'.-');
    } else if (menu == 2){
        horasTrabajadas = Number(prompt('Ingrese las horas trabajadas \n' + horasTrabajadas + 'hs'));
        calculoHorasTrab = categoria * horasTrabajadas;
        alert('Su valor por horas trabajadas: $' + calculoHorasTrab +'.-');
    } else if (menu == 3){
        antiguedad = Number(prompt('Ingrese la cantidad de años trabajados'));
        calculoAntiguedad = calculoHorasTrab / horasTrabajadas * antiguedad;
        alert('Monto por sus años trabajados: $' + calculoAntiguedad);
    } else if (menu == 4){
        aportes = Number(prompt('Ingrese el porcentaje de descuento de los aportes'));
        let totalSueldo = calculoHorasTrab + calculoAntiguedad; 
        calculoTotal = totalSueldo - (totalSueldo * aportes /100)
        alert('Su valor por horas trabajadas: $' + totalSueldo +'.-')
    } else if (menu == 5){
        alert(sueldo); 
    } else {
        alert('Gracias por utilizar el servicio');
    }
}
