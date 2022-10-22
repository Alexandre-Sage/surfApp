import { Alert } from "react-native";

async function getFetchFunction(url: string, token?: string): Promise<any> {
  return fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
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
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "CSRF-token": "CSRF-TOKEN"
    },
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




export { postFetchFunction, getFetchFunction, getFetchSetState, sendFileFetch };