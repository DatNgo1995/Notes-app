import React from 'react'

export const viewMode = ({title,content}) => {

    return (
        <div>
            <input type="text"></input>
            <textarea></textarea>
            <div class="content">
            <h1 class="title">{title}</h1>
            <p>{content}</p>
            </div>
        </div>
    )
}