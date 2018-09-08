export const RATES_RECEIVED = "WIDGET:RATES_RECEIVED";

export function ratesReceived(rates) {
    return { type: RATES_RECEIVED, rates };
}
