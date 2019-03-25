import * as actionTypes from './actionTypes';
import Axios from 'axios';

export const fetchFreeWeekFail = ( error ) => {
    return {
        type: actionTypes.FETCH_FREE_WEEK_FAIL,
        error: error
    };
};

export const fetchFreeWeekStart = () => {
    return {
        type: actionTypes.FETCH_FREE_WEEK_START
    };
};

export const fetchFreeWeekSuccess = ( freeWeek ) => {
    return {
        type: actionTypes.FETCH_FREE_WEEK_SUCCESS,
        freeWeek
    };
};

export const fetchFreeWeek = () => {
    return dispatch => {
        dispatch(fetchFreeWeekStart());
        Axios.get( '/free-week' )
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