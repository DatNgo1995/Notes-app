import Note from '../ui/note'
import { connect } from 'react-redux'

import { addNote, updateNote, deleteNote, updateCount, updateMode  } from '../../actions'

const mapStateToProps = (state,props) => 
{
    let i = props.number;
    return ({
        title: state.notes[i].title,
        content: state.notes[i].content,
        date: state.notes[i].date,
        mode:state.notes[i].mode
    
    })
}


const mapDispatchToProps = (dispatch) => 
({
    updateNoteData({
        date,title,content,number
      }){
        dispatch (
            updateNote(date,title,content,number)
        )
    },
    deleteNoteData(number){
        dispatch(
            deleteNote(number)
        )
    },
    newNode(){
        dispatch(
            addNote()
        )
    },
    updateCount() {
        dispatch (
            updateCount()
        )
    },
    updateMode(number) {
        dispatch (
            updateMode(number)
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Note)	


