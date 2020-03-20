import axios from "axios";
import qs from "qs";
import storage from "../utils/storage";

const ContentType = {
    urlencoded: "application/x-www-form-urlencoded;charset=UTF-8",
    json: "application/json"
}

const baseService = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL, // 测试环境
    timeout: 6000,
    withCredentials: true,
    responseType: "json"
});

baseService.interceptors.request.use((config) => {
    config.headers["Content-Type"] = ContentType.json;
    // eslint-disable-next-line no-undef
    if (storage.get('token')) {
        config.headers["token"] = storage.get('token');
    }
    if (config.headers["Content-Type"] == ContentType.urlencoded && config.method == "post") {
        config.data = qs.stringify(config.data)
    }
    return config;
}, (error) => {
    return Promise.reject(error)
});

baseService.interceptors.response.use((res) => {
    if (res.status === 200) {
        return Promise.resolve(res.data);
    } else if (res.status === 401 || res.status === 403) {
        // 请求错误
        return Promise.resolve(res);
    }
    return res;
}, (error) => {
    return Promise.reject(error);
});

export default baseService;
