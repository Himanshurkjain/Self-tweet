import { FETCH_POSTS } from "../actions/index";
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_POSTS: {
            console.log('reducer data', action.payload.data);
            return _.mapKeys(action.payload.data, 'id');
        }
        default :
            return state;
    }

}

