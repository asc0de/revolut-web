import { RATES_RECEIVED } from "./widget.actions";

export default function WidgetReducer(state = {}, action) {
    switch (action.type) {
        case RATES_RECEIVED: {
            return {
                ...state,
                rates: action.rates
            };
        }
        default: {
            return {
                ...state
            };
        }
    }
}
