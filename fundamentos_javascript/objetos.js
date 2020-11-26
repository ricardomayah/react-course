const mascota = {
    nombre : 'Tom',
    edad : 10,
    vivo : true,
    razas : ['negro','peludo']
}

// Destructuring object 

const nombreMascota = mascota.nombre
console.log(nombreMascota)

const {edad,nombre} = mascota
console.log(edad,nombre)