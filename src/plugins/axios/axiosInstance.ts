import { AppConfig } from '@/app.config'
import axios from 'axios'
 export default axios.create({
    baseURL:AppConfig.BASE_URL,
})