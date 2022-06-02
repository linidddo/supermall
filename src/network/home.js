import { request } from "./request";

export function getHomeNultidata() {
  return request({
    url:'/home/multidata',
  })
}

export function getHomeGoods() {
  // recommendview
  return request({
    url: '/home/data',
    params: {
      
    }
  })
}