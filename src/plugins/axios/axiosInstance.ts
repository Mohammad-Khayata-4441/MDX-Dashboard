import { AppConfig } from '@/app.config'
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const onRequestSuccess = (conf: InternalAxiosRequestConfig<any>) => {
    return conf
}

const onRequestError = (er: Error) => {
    console.log('Axios request error', er)
}

const onResponseSuccess = (res: AxiosResponse) => {
    return res
}

const onResponseError = (er: Error) => {
    console.log('Axios request error', er)
}

const axiosIns = axios.create({
    baseURL: AppConfig.BASE_URL,

})

axiosIns.interceptors.request.use(onRequestSuccess, onRequestError)
axiosIns.interceptors.response.use(onResponseSuccess, onResponseError)
export default axiosIns