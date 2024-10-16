import { useState, useEffect } from 'react'

import Note from './components/Note'
import Notification from './components/Notification'
import Footer from './components/Footer'

import noteService from './services/notes'

const App = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setnewNote] = useState('new note....')
  const [showAll, setshowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect( () => {
    noteService
     .getAll()
     .then((initialNotes) => {
      setNotes(initialNotes)
     })    
  }, [])

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important:!note.important}
    noteService
     .update(id, changedNote)
     .then( (returnedNote) => {
      setNotes(notes.map(n =>  n.id !== id ?n :returnedNote))
    })
     .catch( () => {
      setErrorMessage(
        `the note ${note.content} has already been deleted`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setNotes(notes.filter(n => n.id !== id))
    })
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() <0.5,
    }
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setnewNote('')
      })
  }
  
  const handleNoteChange = (event) => {
    setnewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage}/>
      <div>
        <button onClick={() => setshowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => <Note note={note} key={note.id} toggleImportance={() => toggleImportanceOf}/>)}
      </ul>
      <form onSubmit = {addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
      <Footer />
    </div>
  )
}

export default App