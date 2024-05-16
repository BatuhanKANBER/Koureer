import http from "../../lib/http";


export function signin(body) {
    return http.post("http://192.168.171.30:8080/api/auth/login", body)
}