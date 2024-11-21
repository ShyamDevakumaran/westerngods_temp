import { Auth, BasicAuth } from "../configs";

const api = {
  product: {
    getHomeItemsImage: () => BasicAuth.get(`/ecomm/home_item_images/`),
    getAllItems: (filter) =>
      BasicAuth.get(`/ecomm/item_images/?${filter}=${filter}/`),
    getProductById: (id) => BasicAuth.get(`/ecomm/item/${id}/`),
  },
  Authproduct: {
    getHomeItemsImage: () => Auth.get(`/ecomm/home_item_images/`),
    getAllItems: (filter) =>
      Auth.get(`/ecomm/item_images/?${filter}=${filter}/`),
  },
};
const productAPI = { ...api };

export default productAPI;
