import axios from 'axios'
import { API_ROOT } from './apiRoot'

const instance = axios.create({
  baseURL: API_ROOT,
})
// instance.interceptors.request.use(
//   async (config) => {
//     try {
//     } catch (error) {
//       return Promise.reject(error)
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )
export default instance
