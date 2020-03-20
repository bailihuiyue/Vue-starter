import baseService from "@/services/axios";


export const TestService = {
    add() {
        const api = '/v1/api/add';
        return baseService.get(api);
    },
    getById(id) {
        const api = `/v1/api/detail/${id}`;
        return baseService.get(api);
    },
    getList(data) {
        const api = '/v1/api/add';
        return baseService.get(api, data);
    },
    delete(id) {
        const api = '/v1/api/delete';
        return baseService.post(api, {id});
    }
};
