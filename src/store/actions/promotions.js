import * as actionTypes from './actionTypes';
import Axios from 'axios';

export const fetchPromotionsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_PROMOTIONS_FAIL,
        error: error
    };
};

export const fetchPromotionsStart = () => {
    return {
        type: actionTypes.FETCH_PROMOTIONS_START
    };
};

export const fetchPromotionsSuccess = ( freeWeek ) => {
    return {
        type: actionTypes.FETCH_PROMOTIONS_SUCCESS,
        freeWeek
    };
};

export const fetchPromotions = () => {
    return dispatch => {
        dispatch(fetchPromotionsStart());
        Axios.get( '/promotions' )
            .then( res => {
                const fetchedPromotions = [];
                for ( let key in res.data ) {
                    fetchedPromotions.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchPromotionsSuccess(fetchedPromotions));
            } )
            .catch( err => {
                dispatch(fetchPromotionsFail(err));
            } );
    };
};