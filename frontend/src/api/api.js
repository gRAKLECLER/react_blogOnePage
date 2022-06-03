import axios from 'axios'
import { setCookie, getCookie } from './cookie';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
    },
})

const apiToken = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getCookie('token')}`,
    },
})

export async function LoginApi(data) {
    let rep = {};
    await api
        .post("login_check", data)
        .then((response) => {
            console.log("response of login", response);

            rep = response;

            setCookie('token', rep.data.token)
        })
        .catch((error) => {
            console.log("error", error);
        });
    return rep;
}

export async function registerApi(data) {
    let rep = {};
    await api
        .post("register", data)
        .then((response) => {
            console.log("response of register", response);
            rep = response;
        })
        .catch((error) => {
            console.log("error", error);
        });
    return rep;
}

export async function createArticleApi(data) {
    let rep = {};
    await apiToken
        .post("create_article", data)
        .then((response) => {
            console.log("response of create post", response);
            rep = response;
        })
        .catch((error) => {
            console.log("error", error);
        });
    return rep;
}

export async function showArticlesApi(data) {
    let rep = {};
    await apiToken
        .get("posts", data)
        .then((response) => {
            console.log("response of show posts", response);
            rep = response;
        })
        .catch((error) => {
            console.log("error", error);
        });
    return rep;
}
