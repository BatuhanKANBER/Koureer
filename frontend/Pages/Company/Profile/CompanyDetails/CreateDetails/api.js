import http from "../../../../../lib/http"

export function createCompanyDetails(id, body) {
    return http.post(`http://192.168.171.30:8080/api/companies/${id}/create`, body)
}