import {
    GET_NOTES_SUCCESS,
    GET_NOTES_FAIL,
    SAVE_NOTE_SUCCESS,
    SAVE_NOTE_FAIL,
    DELETE_NOTE_SUCCESS,
    DELETE_NOTE_FAIL
} from '../actions/types';

const initialState = {
    notes: [],
    hasError: false,
    loading: false,
    saveSucess: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTES_SUCCESS:
            return {
                ...state,
                notes: action.payload,
                hasError: false,
                saveSucess: false
            }

        case GET_NOTES_FAIL:
            return {
                ...state,
                hasError: true
            }

        case SAVE_NOTE_SUCCESS:
            return {
                ...state,
                notes: [action.payload, ...state.notes],
                hasError: false,
                saveSucess: true
            }

        case SAVE_NOTE_FAIL:
            return {
                ...state,
                hasError: true,
                saveSucess: false
            }

        case DELETE_NOTE_SUCCESS:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload),
                hasError: false
            }

        case DELETE_NOTE_FAIL:
            return {
                ...state,
                hasError: true
            }

        default:
            return state;
    }
}

export default reducer;