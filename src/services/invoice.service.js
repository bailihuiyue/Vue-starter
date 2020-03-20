import baseService from "@/services/axios";


export const InvoiceService = {
    add() {
        const api = '/v1/api/add';
        return baseService.get(api);
    },
    getUncheckedTotalTask(){
        const api = `/v1/api/uncheckedTotalTask`;
        return baseService.get(api);
    },
    searchContract(id){
        const api = `/v1/api/uncheckedTotalTask`;
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
