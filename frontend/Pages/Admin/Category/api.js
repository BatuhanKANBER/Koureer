import http from "../../../lib/http"

export function loadCategories(page = 0) {
    return http.get("http://192.168.171.30:8080/api/categories/list", { params: { page, size: 13 } });
}

export function getCategoryById(id) {
    return http.get(`http://192.168.171.30:8080/api/categories/${id}`)
}

export function deleteCategory(id) {
    return http.delete(`http://192.168.171.30:8080/api/categories/${id}`)
}

export function editCategory(id, body) {
    return http.put(`http://192.168.171.30:8080/api/categories/${id}/update`, body)
}