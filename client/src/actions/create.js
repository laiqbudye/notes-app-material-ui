import {
    SAVE_NOTE_SUCCESS,
    SAVE_NOTE_FAIL
} from './types';

export const submitNote = (title, details, category) => {
    return async function (dispatch) {
        try {
            const res = await fetch('/api/notes/create', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title, details, category })
            });

            const data = await res.json();

            dispatch({
                type: SAVE_NOTE_SUCCESS,
                payload: data.data
            })
        } catch (error) {
            dispatch({
                type: SAVE_NOTE_FAIL
            })
        }
    }
}