import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const fetchFreeWeekFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const setFreeWeek = ( freeWeek ) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        freeWeek
    };
};

export const initFreeWeek = () => {
    return dispatch => {
        axios.get( "/freeWeek" )
            .then( response => {
               dispatch(setFreeWeek(response.data));
            } )
            .catch( error => {
                dispatch(fetchFreeWeekFailed());
            } );
    };
};