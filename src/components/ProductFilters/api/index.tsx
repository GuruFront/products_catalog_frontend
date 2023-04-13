import axios, {AxiosResponse} from "axios";
import {API} from "../../../config";


export const getCategoriesList:Promise<AxiosResponse> = axios.get( `${API}/categories_list`)




