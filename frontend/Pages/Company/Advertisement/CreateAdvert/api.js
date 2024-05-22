import http from "../../../../lib/http"

export function createAdvert(id, body) {
    return http.post(`http://192.168.171.30:8080/api/adverts/${id}/create`, body)
}

export function getAllCategories() {
    return http.get("http://192.168.171.30:8080/api/categories/all")
}