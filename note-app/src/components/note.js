import React from 'react';
import {editMode} from 'editMode.js';
import {viewMode} from 'viewMode.js';
import {FaTrash} from 'react-icons/fa';
export const Note = ({title,content}) => {
    let state  = {
        mode: "edit",
        content: {

        }
    }
    return (
        <div class="Note">
            <header>{new Date.now()} <FaTrash/></header>
            {state.mode ==="edit"? <editMode title ="" content =""/>:<viewMode title ="" content =""/>}
        </div>
    )
        
}