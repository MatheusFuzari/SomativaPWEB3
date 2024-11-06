import type { AxiosResponse } from "axios"
import axios from "axios"


export const getAxios = () => {
    const createdAxios = axios.create({})

    createdAxios.interceptors.response.use(getAxiosResponse);

    return createdAxios;
}

export const getAxiosResponse = (response: AxiosResponse) => {
    return response.data
}