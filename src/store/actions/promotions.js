import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

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

export const fetchPromotions = () => {
    return dispatch => {
        dispatch(fetchPromotionsStart());
        axios.get( '/orders.json' )
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