/* eslint-disable react-hooks/rules-of-hooks */
import { useApi } from "@/shared/hooks/useApi"
import { SESSION_ENDPOINTS } from "./sessions.endponts"
import {type GetSessionDto} from './session.dto'
export class SessionActions {


    static async CreateSession() {
        return 0
    }

    static async GetSession(sessionId: string) {
        const res = await useApi<{data:GetSessionDto}>('GET', SESSION_ENDPOINTS.BASE + `/${sessionId}`, { confirm: null, errorMessage: true, successMessage: false })
        return res?.data.data
    }


}