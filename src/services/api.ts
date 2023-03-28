import { ServerResponse } from "@/types/response";
import axios from "axios";

export const Axios = axios.create({
    baseURL: "http://127.0.0.1:1337/api/",
    headers: {
        "Authorization": "Bearer " + process.env.API_KEY
    }
})


export const api = <T>(...params: Parameters<typeof Axios>) => Axios<ServerResponse<T>>(...params).then(res => res.data)