import {
    GET_NOTES_SUCCESS,
    GET_NOTES_FAIL,
    DELETE_NOTE_SUCCESS,
    DELETE_NOTE_FAIL
} from './types';

export const fetchNotes = () => {
    return async function (dispatch) {
        try {
            const res = await fetch('/api/notes');
            const data = await res.json();
            
            dispatch({
                type: GET_NOTES_SUCCESS,
                payload: data.data
            })
        } catch (error) {
            dispatch({
                type: GET_NOTES_FAIL
            })
        }
    }
}


export const deleteNote = (id) => {
    return async function (dispatch) {
        try {
            const res = await fetch(`/api/notes/${id}`, {
                method: 'DELETE'
            });

            dispatch({
                type: DELETE_NOTE_SUCCESS,
                payload: id
            })

        } catch (error) {
            dispatch({
                type: DELETE_NOTE_FAIL
            })
        }
    }
}