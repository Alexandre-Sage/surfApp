async function getFetchFunction(url: string): Promise<Response> {
    return fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(serverResponse => serverResponse)
        .catch(serverError => serverError);
};

async function getFetchSetState(url: string, callBack: Function): Promise<Response> {
    return fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(serverResponse => serverResponse.json())
        .then(json => callBack(json))
        .catch(serverError => serverError);
}

async function postFetchFunction(url: string, body: object): Promise<Response> {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "CSRF-token": "CSRF-TOKEN"
        },
        credentials: "include",
        body: JSON.stringify(body)
    })
        .then(serverResponse => serverResponse.json())
        .catch(serverError => serverError)
};


export { postFetchFunction, getFetchFunction, getFetchSetState };