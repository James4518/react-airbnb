import request from ".."

export function getGoodPriceData(){
  return request.get({
    url: "/home/goodprice"
  })
}

export function getPlusData() {
  return request.get({
    url: "/home/plus"
  })
}