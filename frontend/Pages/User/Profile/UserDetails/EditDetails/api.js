import http from "../../../../../lib/http";

export function editUserDetails(id, body) {
    return http.put(`http://192.168.171.30:8080/api/user_details/${id}/update`, body)
}