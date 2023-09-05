import Axios from 'axios';
import {rootUrl,apiUrl} from './app';



export const Http = Axios.create({
    baseURL:rootUrl
})

export const HttpAuth = Axios.create({
    baseURL:apiUrl
})