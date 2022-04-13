import "./styles.css";
import { useState} from "react";
import { nanoid } from "nanoid";
import React from "react";
import NotesList from "./NotesList";
import Search from './Search';
import Header from './Header';
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note",
      date: "14"
    },
    {
      id: nanoid(),
      text: "this is my second note",
      date: "15"
    },
    {
      id: nanoid(),
      text: "this is my third note",
      date: "16"
    },
    {
      id: nanoid(),
      text: "this is my new note",
      date: "16"
    }
  ]);
  const[searchText,setSearchText]=useState('');

  const [darkMode,setDarkMode]=useState(false);

 

  const addNote=(text)=>{
     const date=new Date();
     const newNote={
      id:nanoid(), 
      text:text,
       date:date.toLocaleDateString()
     }
     const newNotes=[...notes,newNote];
     setNotes(newNotes);
  }
   const deleteNote=(id)=>{
      const newNotes=notes.filter((note)=>
       note.id!==id);
       setNotes(newNotes);
      
   }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/> 
      <Search handleSearchNote={setSearchText}/>
      <NotesList
       notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
       

       handleAddNote={addNote}
       handleDeleteNote={deleteNote}
       />
    </div>
    </div>
  );
};
export default App;
