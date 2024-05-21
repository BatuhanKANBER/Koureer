import http from "../../../lib/http"

export function getUserById(id) {
    return http.get(`http://192.168.171.30:8080/api/users/${id}`)
}

