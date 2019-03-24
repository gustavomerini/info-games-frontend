import * as actionTypes from './actionTypes';
import Axios from 'axios';

export const fetchFreeWeekFail = ( error ) => {
    return {
        type: actionTypes.FETCH_FreeWeek_FAIL,
        error: error
    };
};

export const fetchFreeWeekStart = () => {
    return {
        type: actionTypes.FETCH_FreeWeek_START
    };
};

export const fetchFreeWeekSuccess = ( freeWeek ) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        freeWeek
    };
};

export const fetchFreeWeek = () => {
    return dispatch => {
        dispatch(fetchFreeWeekStart());
        Axios.get( '/orders.json' )
            .then( res => {
                const fetchedFreeWeek = [];
                for ( let key in res.data ) {
                    fetchedFreeWeek.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchFreeWeekSuccess(fetchedFreeWeek));
            } )
            .catch( err => {
                dispatch(fetchFreeWeekFail(err));
            } );
    };
};