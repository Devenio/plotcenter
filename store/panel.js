import EventService from "@/services/EventService.js";

export const state = () => ({
  orders_list: [],
  profile: []
});

export const getters = {};

export const mutations = {
  SET_ORDERS_LIST: (state, data) => {
    state.orders_list = data;
  },
  SET_PROFILE: (state, data) => {
    state.profile = data;
  }
};

export const actions = {
  set_orders_list: ({ commit }, token) => {
    EventService.getOrdersList(token)
      .then(res => {
        commit("SET_ORDERS_LIST", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  setProfile: ({ commit }, token) => {
    EventService.getProfile(token)
      .then(res => {
        commit("SET_PROFILE", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
