import { Alert } from "react-native";
import { getStoredData, setStoredData } from "../asyncStorage/asyncStorage";


async function getFetch(url: string, callBack?: Function): Promise<Response> {
  const token = await getStoredData("JWT-TOKEN");
  return fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
    .then(serverResponse => serverResponse.json())
    .then(json => callBack ? callBack(json) : json)
    .catch(serverError => serverError);
}

async function postFetchFunction(url: string, body: object): Promise<Response> {
  const token = await getStoredData("JWT-TOKEN");
  return fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(body)
  })
    .then(serverResponse => serverResponse.json())
    .catch(serverError => serverError)
};

async function sendFileFetch(url: string, formData: FormData, callBack?: Function): Promise<Response> {
  const token = await getStoredData("JWT-TOKEN")
  try {
    const serverResponse = await fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "multipart/form-data",
        "Authorization": `Bearer ${token}`
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

async function authentificationFetch(url: string, body: object): Promise<string> {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      }
    }).then(response => response.json());
    await setStoredData("JWT-TOKEN", response.token);
    return response.message;
  } catch (error) {
    throw error
  }

};



export { authentificationFetch, postFetchFunction, getFetch, sendFileFetch };