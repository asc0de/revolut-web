import { RATES_RECEIVED, INPUT_CHANGED, SOURCE_CHANGED, TARGET_CHANGED } from "./widget.actions";
import Currency from "../shared/shared.constant";

const initialState = {
    rates: [],
    sourceCurrency: Currency.GBP,
    targetCurrency: Currency.EUR,
    baseRate: 1,
    baseBackRate: 1,
    currenciesRange: [Currency.GBP, Currency.EUR, Currency.USD],
    wallet: [
        {
            id: Currency.GBP,
            amount: 49.17,
            exchange: 0,
            target: 0,
            rate: 1,
            backRate: 1
        },
        {
            id: Currency.EUR,
            amount: 33.53,
            exchange: 0,
            target: 0,
            rate: 1,
            backRate: 1
        },
        {
            id: Currency.USD,
            amount: 26.18,
            exchange: 0,
            target: 0,
            rate: 1,
            backRate: 1
        }
    ]
};

const calculateBaseRates = (state, rates) => {
    return {
        baseRate: (1 / rates[state.sourceCurrency]) * rates[state.targetCurrency],
        baseBackRate: rates[state.sourceCurrency] / rates[state.targetCurrency]
    };
};

const calculateRates = (state, rates) => {
    const currentWallet = state.wallet.find(wall => wall.id === state.sourceCurrency);
    return state.wallet.map(curWall => {
        const newWall = {
            ...curWall,
            rate: (1 / rates[state.sourceCurrency]) * rates[curWall.id],
            backRate: rates[state.sourceCurrency] / rates[curWall.id]
        };
        newWall.target = currentWallet.exchange * newWall.rate;
        return newWall;
    });
};

export default function WidgetReducer(state = initialState, action) {
    switch (action.type) {
        case RATES_RECEIVED: {
            return {
                ...state,
                ...calculateBaseRates(state, action.rates),
                rates: action.rates,
                wallet: calculateRates(state, action.rates)
            };
        }
        case INPUT_CHANGED: {
            return {
                ...state,
                wallet: state.wallet.map(wall => {
                    return {
                        ...wall,
                        exchange: action.value,
                        target: action.value * wall.rate
                    };
                })
            };
        }
        case SOURCE_CHANGED: {
            const newState = {
                ...state,
                sourceCurrency: action.code
            };
            return {
                ...newState,
                ...calculateBaseRates(newState, state.rates),
                wallet: calculateRates(newState, state.rates)
            };
        }
        case TARGET_CHANGED: {
            const newState = {
                ...state,
                targetCurrency: action.code
            };
            return {
                ...newState,
                ...calculateBaseRates(newState, state.rates),
                wallet: calculateRates(newState, state.rates)
            };
        }
        default: {
            return {
                ...state
            };
        }
    }
}
