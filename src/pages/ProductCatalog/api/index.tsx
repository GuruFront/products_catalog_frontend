import axios, {AxiosResponse} from "axios";
import {AllFilters} from "../index";

const API = process.env.REACT_APP_API

export const getProducts : (productsConfig : AllFilters) => Promise<AxiosResponse> = (data ) => {
    return axios.post(`${API}/products`, {
        ...data
    })
}

