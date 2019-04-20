import React, { Component } from "react";
import Note from "../containers/note";
import "../../App.css";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header />
        <main>
          {this.props.notes.map((note, i) => (
            <Note     
            number={i}

            />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
