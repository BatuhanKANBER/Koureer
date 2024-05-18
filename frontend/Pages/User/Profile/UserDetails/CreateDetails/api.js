import http from "../../../../../lib/http";


export function createUserDetails(id, body) {
    return http.post(`http://192.168.171.30:8080/api/user_details/${id}/create`, body)
}