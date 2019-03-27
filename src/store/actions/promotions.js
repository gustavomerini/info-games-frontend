import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchPromotionsFail = error => {
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

export const fetchPromotionsSuccess = promotions => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    promotions
  };
};

export const fetchPromotions = () => {
  return dispatch => {
    dispatch(fetchPromotionsStart());
    axios
      .get("/orders.json")
      .then(res => dispatch(fetchPromotionsSuccess(res)))
      .catch(err => {
        dispatch(fetchPromotionsFail(err));
      });
  };
};
