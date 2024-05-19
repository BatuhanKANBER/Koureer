import http from "../../../lib/http";

export function deleteUserDetails(id) {
    return http.delete(`http://192.168.171.30:8080/api/user_details/${id}`)
}

export function deleteUser(id) {
    return http.delete(`http://192.168.171.30:8080/api/users/${id}`)
}