import { request } from "./request";

export function getHomeNultidata() {
  return request({
    url:'/home/multidata',
  })
}

export function getHomeGoods(type,page) {
  // recommendview
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}