let menu;
let tarea;
// let numeroTarea;
// let nuevaTarea;
// let eliminarTarea;


while(menu != 0){
    menu = prompt('1- Nueva Tarea \n2- Ver Tareas \n3- Borrar Tareas \n0- Salir')
    if (menu == 1){
        let numeroTarea = prompt('Asigne un numero para la Tarea')
        let transforNumTarea = Number(numeroTarea) 
        if (numeroTarea == ''){
            alert('Ingrese un valor')
        } else if(numeroTarea != tarea){
                tarea= '\n'+ transforNumTarea + tarea;
            }
    } else if (menu == 2){
            if (tarea == false){
                alert('Sin Tareas asignadas')
            } else{
                alert('Tareas: '+ tarea);
                // alert('Tarea: ' + tarea +'\n');
            }
    } else if ( menu == 3){

        let eliminarTarea = prompt('Indique el numero de tarea que desea eliminar');
        let transforEliminarTarea = eliminarTarea;
        tarea = transforEliminarTarea -tarea ;
        alert('Tarea ' + tarea + ' eliminada');

    } else if ( menu == 0){
        alert('Gracias')
        break
    } else {
        alert('Opcion no valida')
        continue;
    }

}  
