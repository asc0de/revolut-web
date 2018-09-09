import { RATES_RECEIVED } from "./widget.actions";
import Currency from "../shared/shared.constant";

const initialState = {
    rates: [],
    sourceCurrency: Currency.GBP,
    targetCurrency: Currency.EUR,
    sourceToTargetRate: 1,
    targetToSourceRate: 1,
    currenciesRange: [Currency.GBP, Currency.EUR, Currency.USD],
    wallet: [
        {
            id: Currency.GBP,
            amount: 49.17
        },
        {
            id: Currency.EUR,
            amount: 33.53
        },
        {
            id: Currency.USD,
            amount: 26.18
        }
    ]
};

export default function WidgetReducer(state = initialState, action) {
    switch (action.type) {
        case RATES_RECEIVED: {
            return {
                ...state,
                rates: action.rates,
                sourceToTargetRate: (1 / action.rates[state.sourceCurrency]) * action.rates[state.targetCurrency],
                targetToSourceRate: (action.rates[state.sourceCurrency] * 1) / action.rates[state.targetCurrency]
            };
        }
        default: {
            return {
                ...state
            };
        }
    }
}
