import React, { Component } from 'react';
import {Note} from './components/note'
import './App.css';

class App extends Component {
  state = {
    notes : [{
      title: "Sample Note",
      content:" This is the note paragraph"
    }
  ]
  }
  updateNoteData = {
    
  }
  render() {
    return (
      <div className="App">
        <header></header>
        <main>
          {this.state.notes.map((note, i) => 
             <Note updateNoteData = {this.updateNoteData} number = {i} title = {note.title} content = {note.content}/>
          )}
        </main>
      </div>
    );
  }
}

export default App;
