import axios, { AxiosResponse } from 'axios'

const API = process.env.REACT_APP_API

export const getCategoriesList: Promise<AxiosResponse> = axios.get(`${API}/categories_list`)
