import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const SET_NAVBAR_VISIBILITY = 'base/SET_NAVBAR_VISIBILITY';
const SET_TOPBAR_VISIBILITY = 'base/SET_TOPBAR_VISIBILITY';
export const setNavBarVisibility = createAction(SET_NAVBAR_VISIBILITY); // navbar_visible
export const setTopBarVisibility = createAction(SET_TOPBAR_VISIBILITY); // topbar_visible

const initialState = Map({
    header: Map({
        navbar_visible: true,
		topbar_visible: false
    })
});

export default handleActions({
    [SET_NAVBAR_VISIBILITY]: (state, action) => state.setIn(['header', 'navbar_visible'], action.payload),
	[SET_TOPBAR_VISIBILITY]: (state, action) => state.setIn(['header', 'topbar_visible'], action.payload)
}, initialState);
