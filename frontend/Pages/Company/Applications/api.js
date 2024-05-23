import http from "../../../lib/http"

export function loadUsersForAdverts(id) {
    return http.get(`http://192.168.171.30:8080/api/applications/advertisement/${id}/users`);
}