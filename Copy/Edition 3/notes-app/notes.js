const fs = require('fs')
const chalk = require('chalk').default
const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.bgRed('Note title taken!'))
    }
}

const removeNote = (title) => {
    console.log('Remove note with title: ' + title);

    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title)

    if (notes.length === notesToKeep.length) {
        console.log(chalk.bgRed('No note found!'))
    } else {
        console.log(chalk.bgGreen('Note removed!'))
        saveNotes(notesToKeep)
    }
} 

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const listNotes = () => {
    const notes = loadNotes()
    if(notes.length > 0) {
        console.log(chalk.bgGreen('Your Notes'))
        for (key in notes) {
            console.log(notes[key].title)
        }
    } else {
        console.log(chalk.bgRed('No notes found!'));
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    if(notes.length > 0) {
        const note = notes.find(note => note.title === title)
        if(note) {
            console.log(chalk.bgGreen(" "+ note.title + " ") + " - " + note.body)
        } else {
            console.log(chalk.bgRed('Note not found!'))
        }
    } else {
        console.log(chalk.bgRed('No note found!'))
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}