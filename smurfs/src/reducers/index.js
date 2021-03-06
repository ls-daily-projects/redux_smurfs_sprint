import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    ADD_SMURF_FAILURE,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    EDIT_SMURF_FAILURE,
    EDIT_SMURF_START,
    EDIT_SMURF_SUCCESS,
    DELETE_SMURF_FAILURE,
    DELETE_SMURF_START,
    DELETE_SMURF_SUCCESS
} from "../actions"

const initialState = {
    error: "",
    isLoading: false,
    smurfs: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case (FETCH_SMURFS_START,
        ADD_SMURF_START,
        EDIT_SMURF_START,
        DELETE_SMURF_START):
            const s1 = { ...state, error: "", isLoading: true }
            return s1

        case (FETCH_SMURFS_FAILURE,
        ADD_SMURF_FAILURE,
        EDIT_SMURF_FAILURE,
        DELETE_SMURF_FAILURE):
            const s2 = {
                ...state,
                error: payload || `Something has smurfed!`,
                isLoading: false
            }
            return s2

        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                error: "",
                isLoading: false,
                smurfs: payload
            }

        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                error: "",
                isLoading: false,
                smurfs: payload
            }

        case EDIT_SMURF_SUCCESS:
            return {
                ...state,
                error: "",
                isLoading: false,
                smurfs: payload
            }

        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                error: "",
                isLoading: false,
                smurfs: payload
            }

        default:
            return state
    }
}
