function creartarea(){
    let tarea = Number(prompt('Numero de Tarea'));
    alert(tarea)
}
let menu;

while(menu != 0){
    menu = prompt('1- Nueva Tarea \n2- Ver Tareas \n3- Borrar Tareas \n0- Salir')
    if (menu == 1){
        
    } else if (menu == 2){

        alert(tarea++);
        
    } else if ( menu == 3){

    
    } else if ( menu == 0){
        alert('Gracias')
        break
    } else {
        alert('Opcion no valida')
        continue;
    }
} 