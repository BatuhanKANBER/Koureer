import http from "../../../../lib/http"

export function createCategory(body) {
    return http.post("http://192.168.171.30:8080/api/categories/create", body);
}