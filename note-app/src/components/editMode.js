import React, {Component} from 'react'

export class EditMode extends Component{
    constructor(props) {
        super(props);
        this.titleInput = React.createRef();
        this.content = React.createRef();
      }
      state = {
          data :""
      }
      formOnClick = () => {
          this.setState({data :{title :this.titleInput.current.value, content:this.content.current.value}}, () => {
            this.props.noteData({data: this.state.data, number :this.props.number});
          } )
         

      }

   render (){
 
    return (
        <form >
            <input type="text" ref = {this.titleInput} onChange = {this.formOnClick} value={this.props.title}></input>
            <textarea ref = {this.content} onChange = {this.formOnClick} value={this.props.content}></textarea>
        </form>
    )
   }
  
}