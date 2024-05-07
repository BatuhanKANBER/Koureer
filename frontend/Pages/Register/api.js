import http from "../../lib/http";


export function createUser(body) {
    return http.post("http://192.168.171.30:8080/api/users/create", body)
}