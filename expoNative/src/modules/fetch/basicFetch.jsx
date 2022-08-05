async function getFetchFunction(url) {
    return fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(serverResponse => serverResponse)
        .catch(serverError => serverError);
};

async function postFetchFunction(url, body) {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "CSRF-token": "CSRF-TOKEN"
        },
        credentials: "include",
        body: JSON.stringify(body)
    })
        .then(serverResponse => serverResponse)
        .catch(serverError => serverError)
};


export { postFetchFunction, getFetchFunction };