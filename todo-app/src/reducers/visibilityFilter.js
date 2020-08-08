// Import all action types
import {VisibilityFilters} from '../actions';

/**
 *
 * @param state The default state will be show all
 * @param action The type of action for the visibility filter
 */
function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    // Switch case on the type of action
    switch(action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            // Just return the show all filter
            return state;
    }
}

export default visibilityFilter;
