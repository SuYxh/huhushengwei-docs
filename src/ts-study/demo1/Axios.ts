import { AxiosRequestConfig } from './type';
export default class Axios {
  request(config: AxiosRequestConfig) {
    return new Promise((resolve) => {
      resolve(config)
    })
  }

  get(url:string, config?: AxiosRequestConfig) {
    this.request(Object.assign(config || {}, {
      url
    }))
  }

  post(url:string, data?: any, config?: AxiosRequestConfig) {
    this.request(Object.assign(config || {}, {
      url,
      data
    }))
  }
}