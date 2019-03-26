import * as actionTypes from './actionTypes';
import Axios from 'axios';

export const fetchPromotionsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_Promotions_FAIL,
        error: error
    };
};

export const fetchPromotionsStart = () => {
    return {
        type: actionTypes.FETCH_Promotions_START
    };
};

export const fetchPromotionsSuccess = ( promotions ) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        promotions
    };
};

export const fetchPromotions = () => {
    return dispatch => {
        dispatch(fetchPromotionsStart());
        Axios.get( '/orders.json' )
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