export const addNote = () => {
    return {
        type: "addNote",
        payload: {}
    }
}

export const updateNote = (date,title,content,number) => {
    return {
        type: "updateNote",
        payload: {date,title,content,number}
    }
}

export const deleteNote = (number) => {
    return {
        type: "deleteNote",
        number,
        payload: number
    }
}

export const updateCount = () => {
    return {
        type: "updateCount",
        payload: {}
    }
}
export const updateMode = (number) => {
    return {
        type: "updateMode",
        payload: number
    }
}