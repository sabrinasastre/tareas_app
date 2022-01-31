let archivoTareas = require("./funcionesDeTareas");
//console.log(archivoTareas.leerArchivo())

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process
let accion = process.argv[2];
//con process.argv obtengo los parámetros que mando por consola como un array de strings
switch (accion) {
  case "listar":
    console.log("Listado de tareas");
    console.log("------------------");
    let tareas = archivoTareas.leerArchivo();
    /*for (let i = 0;  i < tareas.length; i++) {
            console.log((i + 1) +'. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        }*/
    tareas.forEach((unaTarea, i) => {
      console.log(i + 1 + ". " + unaTarea.titulo + " - " + unaTarea.estado);
    });
    console.log();

    break;

  case "crear":
    console.log();
    console.log("Creando tarea");
    console.log("----------------------------------------");
    let tarea = process.argv[3];
    archivoTareas.guardarTarea({ titulo: tarea, estado: "pendiente" });
    console.log("se agregó con éxito la tarea: " + tarea);
    break;

 case "filtrar":
        console.log();
        console.log("Filtrando tarea");
        console.log("----------------------------------------");
        let estado = process.argv[3];
        let tareasFiltradas = archivoTareas.filtrarPorEstado(estado);
        tareasFiltradas.forEach((unaTarea, i) => {
            console.log(i + 1 + ". " + unaTarea.titulo + " - " + unaTarea.estado);
          });
        console.log();
        break;

  case undefined:
    console.log();
    console.log("Atención - Tienes que pasarme una acción");
    console.log("Las acciones disponibles son: listar");
    console.log("----------------------------------------");
    break;

  default:
    console.log("------------------------------------");
    console.log("No entiendo qué quieres hacer");
    console.log("Las acciones disponibles son: listar");
    console.log("------------------------------------");
    break;
}
