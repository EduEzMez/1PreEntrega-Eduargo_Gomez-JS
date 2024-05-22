let menu;
let tarea = '';
let numeroTarea;
let nuevaTarea;
let eliminarTarea;

function tareas(){
    alert('Saludos')
}

tareas();

while(menu != 0){
    let menu = prompt('1- Nueva Tarea \n2- Ver Tareas \n3- Borrar Tareas \n0- Salir')
    if (menu == 1){
        numeroTarea = prompt('Asigne un numero para la Tarea')
        if (numeroTarea == ''){
            alert('Ingrese un valor')
        } else{
            nuevaTarea = prompt('Ingrese la nueva tarea');
            if (nuevaTarea == ''){
                alert('Ingrese un valor')
            } else if ( nuevaTarea != tarea){
                //for (let entrada = 1; entrada <= 1; entrada++){
                //     tarea = '\n'+entrada + nuevaTarea + '' + tarea 
                // }
                // tarea = nuevaTarea + '' + tarea 
                tarea = '\n'+ Number(numeroTarea) + ' ' + nuevaTarea + tarea;
            }
        }
    } else if ( menu == 2){
        if (tarea == false){
            alert('Sin Tareas asignadas')
        } else{
            alert('Tareas: '+ tarea);
            // alert('Tarea: ' + tarea +'\n');
        }

    } else if ( menu == 3){

        // numeroTarea = tarea;
        // let eliminado = prompt('Indique el numero de tarea que desea eliminar');
        // tarea -= numeroTarea - eliminado;
        // tarea = numeroTarea;
        // alert('Tarea ' + numeroTarea + ' eliminada');

        numeroTarea = tarea;
        eliminarTarea = prompt('Indique el numero de tarea que desea eliminar');
        tarea -= eliminarTarea;
        alert('Tarea ' + numeroTarea + ' eliminada');

    } else if ( menu == 0){
        alert('Gracias')
        break
    } else {
        alert('Opcion no valida')
        continue;
    }
}

