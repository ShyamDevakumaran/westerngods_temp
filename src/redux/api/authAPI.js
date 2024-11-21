import { Auth, BasicAuth } from "../configs";

const api = {
  authUser: {
    loginUser: (content) =>
      BasicAuth.post(`/admin_api/auth/cus_login_otp_create/`, content),
    otpVerify: (content) =>
      BasicAuth.post(`/admin_api/auth/cus_login_otp_verify/`, content),
    signupUser: (content) =>
      BasicAuth.post(`/admin_api/auth/cus_register/`, content),
    logoutUser: () => Auth.post(`/admin_api/auth/cus_signout/`),
    getMenuDetails: () => BasicAuth.get(`/ecomm/navbar_menu/`),
    getProfileDetails: (email) =>
      BasicAuth.get(`/admin_api/auth/profile/${email}/`),
    editProfileDetails: (email, content) =>
      BasicAuth.put(`/admin_api/auth/profile/${email}/`, content),
  },
};
const authAPI = { ...api };

export default authAPI;
