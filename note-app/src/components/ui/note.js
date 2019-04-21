import React, { Component } from "react";
import { EditMode } from "./editMode";
import { ViewMode } from "./viewMode";
import { FaTrash } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
class Note extends Component {
  state = {
    data: ""
  };
  handleNewData = noteData => {
    this.props.updateNoteData({
      number: this.props.number,
      title: noteData.title,
      content: noteData.content,
      date: this.props.date
    } );
   
  };
  deleteNoteData = () => {
    let number = this.props.number;

    this.props.deleteNoteData(number);
  };
  updateModeData = () => {
    let number = this.props.number;
    this.props.updateMode(number);
  };
  newNoteData = () => {
    this.props.newNode({});
    this.updateCount();
  };
  updateCount = () => {
    this.props.updateCount({});
  };
  render() {
    let { title, content, number, date, mode } = this.props;
    console.log(mode);
    return (
      <div className="Note">
        <header>
          {date} <FaExchangeAlt onClick={this.updateModeData} />{" "}
          <FaTrash onClick={this.deleteNoteData} />
          <FaPlus onClick={this.newNoteData} />
        </header>
        {mode === "edit" ? (
          <EditMode
            noteData={this.handleNewData}
            title={title}
            content={content}
            number={number}
          />
        ) : (
          <ViewMode title={title} content={content} />
        )}
      </div>
    );
  }
}

export default Note;
