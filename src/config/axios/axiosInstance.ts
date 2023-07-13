import axios from 'axios'
import { AppConfig } from '../app.config'
export default axios.create({
    baseURL:AppConfig.API_URL,
})