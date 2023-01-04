import Axios from './Axios'
import { AxiosInstance } from './type'

function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}


function createInstance() {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)

  // instance 

  extend(instance, context)

  return instance as AxiosInstance
}


const axios = createInstance()

axios.getUri()


export default axios