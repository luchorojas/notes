const fs = require('fs')
const chalk = require('chalk')
const archivoNombre = 'notes.json'

const getNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green('Tus Notas'))
    notes.forEach((note) => {
        console.log('- '+note.title)
    });
}

//Agrega Nota
const addNote = (title,body) => {
    const notes = loadNotes()
    const notasDuplicada = notes.find((note) => note.title === title)

    if (!notasDuplicada) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('Se agrego la nota'))
    } else {
        console.log(chalk.red('Titulo repetido'))
    }
}

//Borra Nota
const removeNote = (title) => {
    const notes = loadNotes()
    const notasDistintas = notes.filter((note) => note.title != title)
    
    if (notasDistintas.length == notes.length ){
        console.log(chalk.red('La nota no existe'))
    } else {
        console.log(chalk.green('Se elimino la nota'))
        saveNotes(notasDistintas)
    }
}

//Borra Nota
const readNote = (title) => {
    const notes = loadNotes()
    const notaLeida = notes.find((note) => note.title === title)
    
    if (notaLeida){
        console.log('Titulo: '+chalk.green(notaLeida.title)+' - Cuerpo: '+ notaLeida.body)
    } else {
        console.log(chalk.red('La nota no existe'))
    }
}

//-----------------------------------------------------

//Guarda el archivo
const saveNotes = (notes) => fs.writeFileSync(archivoNombre,JSON.stringify(notes))

//Leer el archivo
const loadNotes = function() {
    try{
        const buffer = fs.readFileSync(archivoNombre)
        return JSON.parse(buffer.toString())
    }catch (e){
        //Devuelve un array vacio
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}