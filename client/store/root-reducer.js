import { combineReducers } from "redux";
import { createForms } from 'react-redux-form';

const currencyFormState = {
    currency_name: '',
    display_name: '',
}

const marketFormState = {
    market_name: '',
    api_path: '',
    t_bid: '',
    t_price: '',
    t_ask: '',
}

const rootReducer = combineReducers({
    ...createForms({
        currency: currencyFormState,
        market: marketFormState,
    }),
});

export default rootReducer;