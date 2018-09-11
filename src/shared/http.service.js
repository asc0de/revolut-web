export function get(url) {
    return request(url, "GET");
}

function request(url, method) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();

        req.onload = e => resolve(req.response ? JSON.parse(req.response) : {});
        req.onerror = e => reject(e);

        req.open(method, url);
        req.send();
    });
}
