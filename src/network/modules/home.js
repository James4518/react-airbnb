import request from ".."

export function getGoodPrice(){
  return request.get({
    url: "/home/goodprice"
  })
}