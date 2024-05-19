import http from "../../../lib/http"

export function loadUsers(page = 0) {
    return http.get("http://192.168.171.30:8080/api/users/list", {params: {page , size: 10}});
}