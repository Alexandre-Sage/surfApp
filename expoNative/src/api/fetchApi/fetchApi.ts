import { Alert } from "react-native";
import { getStoredData, setStoredData } from "../asyncStorage/asyncStorage";


async function getFetch(url: string, callBack?: Function): Promise<Response> {
  const token = await getStoredData("JWT-TOKEN");
  try {
    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    console.log(response)
    const json = await response.json()
    return callBack ? callBack(json) : json
  } catch (error) {
    console.log(error)
    throw error
  }
  //return 
  //  .then(serverResponse => serverResponse.json())
  //  .then(json => callBack ? callBack(json) : json)
  //  .catch(serverError => console.log(serverError));
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

async function sendFileFetch(url: string, formData: FormData, callBack?: Function): Promise<any> {
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
    if (json.error) throw json as Error;
    if (callBack) return callBack(json);
    else return json
  } catch (error: any) {
    throw error
  }
}

async function authentificationFetch(url: string, body: object): Promise<any> {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      }
    }).then(response => response.json());
    if (response.error) throw response as Error;
    await setStoredData("JWT-TOKEN", response.token);
    return response;
  } catch (error) {
    throw error
  }

};



export { authentificationFetch, postFetchFunction, getFetch, sendFileFetch };