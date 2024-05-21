import http from "../../../../lib/http"

export function getAllCategories() {
    return http.get("http://192.168.171.30:8080/api/categories/all")
}