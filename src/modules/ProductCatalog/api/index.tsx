import axios, { AxiosResponse } from 'axios'
import { AllFilters } from '../'

const API = process.env.REACT_APP_API

export const getProducts = (data: AllFilters): Promise<AxiosResponse> => {
  return axios.post(`${API}/products`, {
    ...data,
  })
}

export const getCategoriesList: Promise<AxiosResponse> = axios.get(`${API}/categories_list`)
