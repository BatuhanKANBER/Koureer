import http from "../../../lib/http";

export function deleteCompanyDetails(id) {
    return http.delete(`http://192.168.171.30:8080/api/companies/${id}`)
}

export function deleteUser(id) {
    return http.delete(`http://192.168.171.30:8080/api/users/${id}`)
}