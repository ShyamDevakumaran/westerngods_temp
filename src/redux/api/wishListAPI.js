import { Auth } from "../configs";

const api = {
  wishlist: {
    addProductToWishlist: (adddata) => Auth.post(`/ecomm/wishlist/`, adddata),
    getWishlistProducts: () => Auth.get(`/ecomm/wishlist/`),
    editWishlist: (id, editdata) =>
      Auth.put(`/catalog_master/stockissue_type/${id}/`, editdata),
    deleteProductFromWishlist: (id) => Auth.delete(`/ecomm/wishlist/${id}/`),
  },
};
const wishListAPI = { ...api };

export default wishListAPI;
