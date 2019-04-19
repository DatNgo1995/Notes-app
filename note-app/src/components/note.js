import React, { Component } from "react";
import { EditMode } from "./editMode";
import { ViewMode } from "./viewMode";
import { FaTrash } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import {FaPlus} from "react-icons/fa";
class Note extends Component {
  state = { mode: "view" };

    handleNewData = (newData) => {
        this.props.updateNoteData(newData);
    }
    

  render() {
    let { mode } = this.state ;
    let  {title, content, number,date } = this.props;
    return (
      <div
        className="Note"
       
      >
        <header>
          {date} <FaExchangeAlt  onClick={() => {
          let newMode = mode === "view" ? "edit" : "view";
          this.setState({ mode: newMode });
        }}/> <FaTrash onClick = {() => this.props.deleteNote(number)}/>
        <FaPlus onClick = {this.props.newNode}/>
        </header>
        {mode === "edit" ? (
          <EditMode noteData= {this.handleNewData} title={title} content={content} number = {number}/>
        ) : (
          <ViewMode title={title} content={content} />
        )}
      </div>
    );
  }
}

export default Note;
