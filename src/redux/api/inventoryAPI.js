import { Auth, BasicAuth } from "../configs";

const api = {
    inventory: {
        getAllItems: () => BasicAuth.get(`/masters/item/`),
        getItemsByID: () => BasicAuth.get(`/masters/item/`),
        getAllCategory: () => BasicAuth.get(`/masters/item/`),

    },
};
const inventoryAPI = { ...api };

export default inventoryAPI;
