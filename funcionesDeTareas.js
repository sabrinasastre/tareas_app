const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJson: function (arrayDeTareas){
        let arrayString = JSON.stringify(arrayDeTareas);
        fs.writeFileSync(this.archivo, arrayString);
    },
    guardarTarea: function (tarea){
        //obtenemos todas las tareas y pusheamos la nueva tarea
        let arrayTareasAgregadas = this.leerArchivo()
       arrayTareasAgregadas.push(tarea)
        //guardamos el array nuevo y lo convertimos a JSON
        this.escribirJson(arrayTareasAgregadas)

    },
    filtrarPorEstado: function (estado){
       // console.log(estado)
        //obtenemos todas las tareas y pusheamos la nueva tarea
        let arrayTareas = this.leerArchivo()
        let tareasFiltradas = arrayTareas.filter(function(tarea){
            return tarea.estado === estado  
        })
       // console.log(tareasFiltradas)
        return tareasFiltradas

    }
} 

module.exports = archivoTareas;

//estoy accediendo a la propiedad leerArchivo del objeto archivoTarea
//estoy llamando a la función de la propiedad leerArchivos: 

