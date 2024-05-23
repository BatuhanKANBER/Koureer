import http from "../../../lib/http"

export function loadMyApplications(id, page = 0) {
    return http.get(`http://192.168.171.30:8080/api/applications/${id}/list`, { params: { page, size: 3 } });
}