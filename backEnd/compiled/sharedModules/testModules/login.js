import fetch from "node-fetch";
const url = "http://localhost:3500/logIn";
export const getAuthentificationToken = async (url, credentials) => {
    const token = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    });
    return token.json();
};
