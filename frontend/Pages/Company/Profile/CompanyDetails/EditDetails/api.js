import http from "../../../../../lib/http";

export function editCompanyDetails(id, body) {
    return http.put(`http://192.168.171.30:8080/api/companies/${id}/update`, body)
}