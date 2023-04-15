import axios, {AxiosResponse} from "axios";
import {AllFilters} from "../index";
import {API} from "../../../config";


export const getProducts : (productsConfig : AllFilters) => Promise<AxiosResponse> = (data ) => {
    return axios.post(`${API}/products`, {
        ...data
    })
}

