import {
    SAVE_NOTE_SUCCESS,
    SAVE_NOTE_FAIL
} from './types';

export const submitNote = (title, detail, category) => {
    return async function (dispatch) {
        try {
            const res = await fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title, detail, category })
            });

            const data = await res.json();

            dispatch({
                type: SAVE_NOTE_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: SAVE_NOTE_FAIL
            })
        }
    }
}