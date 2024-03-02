import axiosInstance from "@/plugins/axios/axiosInstance"
import { serialize } from 'object-to-formdata'
import { Method, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"

export const useHttp = async <REST, REQT>(url: string, method: Method, payload?: REQT, config?: AxiosRequestConfig) => {



    try {
        let formData: FormData | null = null;

        if (payload && typeof payload === 'object') {
            const isFormData = Object.values(payload).some(val => val instanceof File || val instanceof FileList);
            if (isFormData) {
                formData = serialize(payload);
            }
        }


        const { data } = await axiosInstance<REQT, AxiosResponse<REST>>({ url, method, data: formData ?? payload })
        return data;

    }

    catch (er) {
        if (er instanceof AxiosError) {
            console.error('error', er.code);
            console.error(er.message);
            // if (er.code === '400') {
            // }

        }

        else {
            throw er;
        }

    }


}



