import http from "../../../../lib/http";

export function editUser(id, body) {
    return http.put(`http://192.168.171.30:8080/api/users/${id}/update`, body)
}