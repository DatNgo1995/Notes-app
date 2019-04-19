import React, { Component } from "react";
import Note from "./components/note";
import "./App.css";

class App extends Component {
  state = {
    notes: [
      {
        date: new Date().toString(),
        title: "Sample Note",
        content: " This is the note paragraph"
      }
    ]
  };
  count = 1;
  updateNoteData = newNote => {
    let newNotes = this.state.notes;
    newNotes[newNote.number].title = newNote.data.title;
    newNotes[newNote.number].content = newNote.data.content;
    this.setState({
      notes: newNotes
    });
  };
  deleteNote = number => {
    let newNotes = this.state.notes.filter ((note,i) => i !== number)
    this.setState({
      notes: newNotes
    });
  }
  newNode = () => {
    this.count++;
    let newNode = {
      date: new Date().toString(),
      title: "Sample Note " + this.count,
      content : "This is the note paragraph"
    }
    this.setState({notes: [...this.state.notes, newNode]})
  }
  render() {
    return (
      <div className="App">
        <header />
        <main>
          {this.state.notes.map((note, i) => (
            <Note
              updateNoteData={this.updateNoteData}
              number={i}
              title={note.title}
              content={note.content}
              date= {note.date}
              deleteNote = {this.deleteNote}
              newNode = {this.newNode}
            />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
