export const RATES_RECEIVED = "WIDGET:RATES_RECEIVED";
export const INPUT_CHANGED = "WIDGET:INPUT_CHANGED";
export const SOURCE_CHANGED = "WIDGET:SOURCE_CHANGED";
export const TARGET_CHANGED = "WIDGET:TARGET_CHANGED";

export function ratesReceived(rates) {
    return { type: RATES_RECEIVED, rates };
}

export function inputChanged(value) {
    return { type: INPUT_CHANGED, value };
}

export function sourceChanged(code) {
    return { type: SOURCE_CHANGED, code };
}

export function targetChanged(code) {
    return { type: TARGET_CHANGED, code };
}
