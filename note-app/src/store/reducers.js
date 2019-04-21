import { combineReducers } from 'redux';
export const notes = (state = [] ,action) => {
    switch(action.type) {
        case "addNote":
        console.log("this is state:",state)
        return [
            ...state,
            {
                date: new Date().toString(),
                title: "Sample Note",
                content: " This is the note paragraph",
                mode: "view"
              }
        ]

        case "updateNote":
        {
            let newState = state.slice();
            console.log(action)
            newState[action.payload.number] = {...newState[action.payload.number], title : action.payload.title, content :action.payload.content }
            console.log(newState)
            return newState;
        }
        

        case "deleteNote":
        return state.filter ((note,i) => i !== action.payload)

        case "updateMode": 
        {
            let newState = state.slice();
            console.log(newState[0],action.payload)
            newState[action.payload].mode  = newState[action.payload].mode === 'view' ? 'edit' : 'view'
            return newState
        }
        
        default:
        return state
    }
}



export const count = (state = [] ,action) => {
    let newState = state + 1;
    if (action.type === "updateCount") return newState
    return state
}

export default combineReducers({
    notes, count
})