import { Auth, BasicAuth } from "../configs";

const api = {
    master: {
        getBanner: () => BasicAuth.get(`/masters/bannner/`),
        getOfferSlide: () => BasicAuth.get(`/masters/offerslide/`),
        createContactDetails: () => BasicAuth.post(`/masters/contact/`),
    },
};
const masterAPI = { ...api };

export default masterAPI;
