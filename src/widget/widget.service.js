import { get } from "../shared/http.service";
import config from "../config";

export function startPollingData(onDataReceived) {
    getRates().then(onDataReceived);
    // return setInterval(() => {
    //     getRates().then(onDataReceived);
    // }, config.POLLING_INTERVAL);
}

function getRates() {
    return get(`https://openexchangerates.org/api/latest.json?app_id=${config.OPEN_EXCHENGE_RATES_API_KEY}`).then(res => res.rates);
}
