import axiosIns from "@/plugins/axios/axiosInstance";
import { AxiosRequestConfig } from "axios";
import { apiServiceErrorHandler } from "./errorHandler";
type ApiRequestConfig = AxiosRequestConfig

const defaultApiConfig: ApiRequestConfig = {}


async function GET<T>(url: string, config: ApiRequestConfig = defaultApiConfig) {
    try {
        const response = await axiosIns.get<T>(url, config);
        return response
    } catch (error) {
        apiServiceErrorHandler(error)
        throw error;
    }
}

async function POST<RES, REQ = any>(url: string, payload: REQ, config: ApiRequestConfig = defaultApiConfig) {
    try {
        const response = await axiosIns.post<RES>(url, payload, config);
        return response
    } catch (error) {
        apiServiceErrorHandler(error)
        throw error;
    }
}

async function PUT<RES, REQ = any>(url: string, payload: REQ, config: ApiRequestConfig = defaultApiConfig) {
    try {
        const response = await axiosIns.put<RES>(url, payload, config);
        return response
    } catch (error) {
        apiServiceErrorHandler(error)
        throw error;
    }
}

async function DELETE<RES>(url: string, config: ApiRequestConfig = defaultApiConfig) {
    try {
        const response = await axiosIns.delete<RES>(url, config);
        return response
    } catch (error) {
        apiServiceErrorHandler(error)
        throw error;
    }
}

export { POST, DELETE, PUT, GET }

