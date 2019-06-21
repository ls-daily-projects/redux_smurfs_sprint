import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE
} from "../actions"

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const initialState = {
    error: "",
    isLoading: false,
    smurfs: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_SMURFS_START:
            return { ...state, error: "", isLoading: true }

        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                error: payload.msg || `Something has smurfed!`,
                isLoading: false
            }

        case FETCH_SMURFS_SUCCESS:
            return { ...state, error: "", isLoading: false, smurfs: payload }

        default:
            return state
    }
}
