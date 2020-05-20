const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.version('1.1.0')

//Comando agregar (add)
yargs.command({
    command: 'add',
    describe: 'Agrega un nueva Nota',
    builder: {
        title:{
            describe: 'Titulo de la nota',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Cuerpo de la nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Comando Eliminar (remove)
yargs.command({
    command: 'remove',
    describe: 'Elimina un nueva Nota',
    builder: {
        title:{
            describe: 'Titulo de la nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Comando Listar (list)
yargs.command({
    command: 'list',
    describe: 'Lista las Notas',
    handler() {
        notes.getNotes()
    }
})

// Comando Leer (read)
yargs.command({
    command: 'read',
    describe: 'Leer una Nota',
    builder: {
        title:{
            describe: 'Titulo de la nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()

