import http from "../../lib/http";


export function createUser(body) {
    return http.post("http://10.40.192.45:8080/api/auth/register", body)
}