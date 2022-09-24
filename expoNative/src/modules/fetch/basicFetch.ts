import { Alert } from "react-native";

async function getFetchFunction(url: string): Promise<any> {
    return fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(serverResponse => serverResponse.json())
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
            // "CSRF-token": "CSRF-TOKEN"
        },
        credentials: "include",
        body: JSON.stringify(body)
    })
        .then(serverResponse => serverResponse.json())
        .catch(serverError => serverError)
};

async function sendFileFetch(url: string, formData: FormData, callBack?: Function): Promise<Response> {
    try {
        const serverResponse = await fetch(`${process.env.API_LAN}${url}`, {
            method: 'POST',
            credentials: "include",
            body: formData,
            headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "multipart/form-data",
            },
        });
        const json = await serverResponse.json()
        if (callBack) return callBack(json);
        else return json
    } catch (error: any) {
        Alert.alert(error.message)
        return error
    }
}

const sendPicture = async (url: string, pictureUri: string, pictureName: string, callBack?: Function): Promise<Response> => {
    const formData: FormData = new FormData();
    const splitedImageUri: Array<string> = pictureUri.split(".");
    const imageType: string = splitedImageUri[splitedImageUri.length - 1];
    formData.append("image", {
        uri: pictureUri,
        type: `image/${imageType}`,
        name: pictureName
    });
    return await sendFileFetch(url, formData, callBack);
}


export { postFetchFunction, getFetchFunction, getFetchSetState, sendFileFetch, sendPicture };