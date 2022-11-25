import http from "../http-common";
class readJson {
    getJson() {
        return http.get("data/user_info.json");
    }
}
