import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const SET_NAVBAR_VISIBILITY = 'base/SET_NAVBAR_VISIBILITY';
export const setNavBarVisibility = createAction(SET_NAVBAR_VISIBILITY); // navbar_visible

const initialState = Map({
    header: Map({
        navbar_visible: true,
    })
});

export default handleActions({
    [SET_NAVBAR_VISIBILITY]: (state, action) => state.setIn(['header', 'navbar_visible'], action.payload),
}, initialState);
