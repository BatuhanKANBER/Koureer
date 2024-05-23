import http from "../../lib/http"

export function loadAdverts(page = 0) {
    return http.get(`http://192.168.171.30:8080/api/adverts/list`, { params: { page, size: 3 } });
}

export function applyToAdvert(id, body) {
    return http.post(`http://192.168.171.30:8080/api/applications/${id}/create`, body);
}