import http from "../../../lib/http"

export function loadAdverts(id, page = 0) {
    return http.get(`http://192.168.171.30:8080/api/adverts/${id}/list`, { params: { page, size: 4 } });
}

export function deleteAdvert(id) {
    return http.delete(`http://192.168.171.30:8080/api/adverts/${id}`)
}

export function getAdvertById(id) {
    return http.get(`http://192.168.171.30:8080/api/adverts/${id}`)
}

export function editAdvert(id, body) {
    return http.put(`http://192.168.171.30:8080/api/adverts/${id}/update`, body)
}