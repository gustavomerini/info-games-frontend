import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  promotions: null,
  loading: false
};

const fetchPromotionsStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchPromotionsSuccess = (state, action) => {
  return updateObject(state, {
    promotions: action.promotions,
    loading: false
  });
};

const fetchPromotionsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROMOTIONS_FAIL:
      return fetchPromotionsFail(state, action);
    case actionTypes.FETCH_PROMOTIONS_START:
      return fetchPromotionsStart(state, action);
    case actionTypes.FETCH_PROMOTIONS_SUCCESS:
      return fetchPromotionsSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
