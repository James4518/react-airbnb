import request from "..";

export function getRoomList(offset = 0, size = 20) {
  return request.get({
    url: "entire/list",
    params: {
      offset,
      size
    }
  })
}