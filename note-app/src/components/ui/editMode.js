import React, { Component } from "react";

export class EditMode extends Component {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.content = React.createRef();
  }
 
  formOnClick = () => {
   
        this.props.noteData({
          title: this.titleInput.current.value,
          content: this.content.current.value

        });
   
  };

  render() {
    return (
      <form>
        <input
          type="text"
          ref={this.titleInput}
          onChange={this.formOnClick}
          defaultValue={this.props.title}
        />
        <textarea
          ref={this.content}
          onChange={this.formOnClick}
          defaultValue={this.props.content}
        />
      </form>
    );
  }
}
