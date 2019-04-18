import React from 'react';
import {editMode} from 'editMode.js';
import {viewMode} from 'viewMode.js';
import {FaTrash} from 'react-icons/fa';
export const Note = ({title,content}) => {
    let mode = "edit"
    return (
        <div class="Note">
            <header>{new Date.now()} <FaTrash/></header>
            {mode ==="edit"? <editMode title ={title} content ={content}/>:<viewMode title ="" content =""/>}
        </div>
    )
        
}