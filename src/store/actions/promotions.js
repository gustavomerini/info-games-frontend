import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchPromotionsFail = error => {
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

export const fetchPromotionsSuccess = promotions => {
  return {
    type: actionTypes.FETCH_PROMOTIONS_SUCCESS,
    promotions
  };
};

export const fetchPromotions = () => {
  return dispatch => {
    dispatch(fetchPromotionsStart());
    axios
      .get("/promotions")
      .then(res => dispatch(fetchPromotionsSuccess(res.data)))
      .catch(err => dispatch(fetchPromotionsFail(err)));
  };
};
