import http from "../http-common";

class JsonServices {
    getJson() {
        return http.get("data/productList.json");
    }
}

export default new JsonServices();
