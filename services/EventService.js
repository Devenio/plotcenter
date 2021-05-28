import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.plotcenter.net/v1/front"
});

export default {
  register({ username, email, password, password_confirm }) {
    return apiClient.post("/accounts/register/", {
      username,
      email,
      password,
      password_confirm
    });
  },
  getLocationsList() {
    return apiClient.get("/locations-list/");
  },
  verifyRegistration(user_id, timestamp, signature) {
    return apiClient.post("/accounts/verify-registration/", {
      user_id,
      timestamp,
      signature
    });
  },
  login(login, password) {
    return apiClient.post("/accounts/login/", {
      login,
      password
    });
  },
  logout(token) {
    return apiClient.post("/accounts/logout/", null, this.setConfig(token));
  },
  getDashboard(token) {
    return apiClient.get("/dashboard/", this.setConfig(token));
  },
  getProfile(token) {
    return apiClient.get("/accounts/profile/", this.setConfig(token));
  },
  getOrdersList(token) {
    return apiClient.get("/orders-list/", this.setConfig(token));
  },
  changePass(token, old_password, password, password_confirm) {
    console.log({ old_password, password, password_confirm });
    return apiClient.post(
      "/accounts/change-password/",
      { old_password, password, password_confirm },
      this.setConfig(token)
    );
  },
  setConfig(token) {
    return {
      headers: { Authorization: `token ${token}` }
    };
  },
  registerEmail(token, email) {
    return apiClient.post(
      "/accounts/register-email/",
      { email },
      this.setConfig(token)
    );
  },
  verifyEmail(token, user_id, timestamp, signature, email) {
    return apiClient.post(
      "/accounts/verify-email/",
      { user_id, timestamp, signature, email },
      this.setConfig(token)
    );
  },
  send_rest_password_link(email) {
    return apiClient.post("/accounts/send-reset-password-link/", { email });
  },
  resetPassword(user_id, timestamp, signature, password, password_confirm) {
    return apiClient.post("/accounts/reset-password/", {
      user_id,
      timestamp,
      signature,
      password,
      password_confirm
    });
  },
  getKeys(token) {
    return apiClient.get("/wallets-list/", this.setConfig(token));
  },
  deleteKey(token, id) {
    return apiClient.delete(`/delete-wallet/${id}/`, this.setConfig(token));
  },
  createKey(token, pool_pk, farmer_pk) {
    return apiClient.post(
      "/create-wallet/",
      { pool_pk, farmer_pk },
      this.setConfig(token)
    );
  },
  createOrder(token, wallet, location, plot_count, expire) {
    return apiClient.post(
      "/create-order/",
      { wallet, location, plot_count, expire },
      this.setConfig(token)
    );
  },
  pay(token, order, pgw) {
    return apiClient.post(
      "/pay/",
      { order, pgw },
      this.setConfig(token)
    );
  },
  pgws_list() {
    return apiClient.get("/pgws-list/");
  }
};
