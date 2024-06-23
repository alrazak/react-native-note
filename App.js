import React, { useState } from 'react'
import Home from './src/screens/home'
import AddNote from './src/screens/addNote'
import EditNote from './src/screens/editNote'

const CurrentPageWidget = ({ 
  currentPage, 
  noteList, 
  setCurrentPage, 
  addNote,
  deleteNote,
  editNote,
  noteEdit,
  setNoteEdit,
}) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          setNoteEdit={setNoteEdit}
        />
      )
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />
    case 'edit':
      return (
        <EditNote
          setCurrentPage={setCurrentPage}
          editNote={editNote}
          noteEdit={noteEdit}
        />
      );
    default:
      return <Home />
  }
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ]);

  const [noteEdit, setNoteEdit] = useState(null);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1
  
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ])
  }

  const deleteNote = (noteId) => {
    const notes = noteList.filter((note) => note.id !== noteId);

    setNoteList(notes);
  }

  const editNote = (id, title, desc) => {
    const changeNotes = noteList.map((note) => 
    note.id === id? {...note, title, desc } : note
    );
    setNoteList(changeNotes);
    setNoteEdit(null);
  }

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote} 
      deleteNote={deleteNote}
      editNote={editNote}
      noteEdit={noteEdit}
      setNoteEdit={setNoteEdit}
    />
  )
}

export default App