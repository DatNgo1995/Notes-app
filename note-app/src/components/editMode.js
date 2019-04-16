import React from 'react'

export const editMode = ({title,content}) => {
    const updateContent= (e) => {
        console.log(e)
    }
    return (
        <div onclick ={e => updateContent(e)}>
            <input type="text">{title}</input>
            <textarea>{content}</textarea>
        </div>
    )
}