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
    return apiClient.get("/locations-list");
  }
};
