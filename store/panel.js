import EventService from "@/services/EventService.js";

export const state = () => ({
  orders_list: [],
  profile: [],
  dashboard: {},
  keys: [],
  order: {
    wallet: "",
    location: "",
    numberOfPlots: 1,
    plotCost: 0
  },
});

export const getters = {};

export const mutations = {
  SET_ORDERS_LIST: (state, data) => {
    state.orders_list = data;
  },
  SET_PROFILE: (state, data) => {
    state.profile = data;
  },
  SET_DASH: (state, data) => {
    state.dashboard = data;
  },
  SET_KEYS: (state, data) => {
    state.keys = data;
  },
  UPDATE_ORDER_WALLET: (state, id) => {
    state.order.wallet = id;
  },
  UPDATE_ORDER_LOC: (state, location) => {
    state.order.location = location;
  },
  UPDATE_ORDER_PLOTS: (state, number) => {
    state.order.numberOfPlots = number;
  },
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
  },
  setDash: ({ commit }, token) => {
    EventService.getDashboard(token)
      .then(res => {
        commit("SET_DASH", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  setKeys: ({ commit }, token) => {
    EventService.getKeys(token)
      .then(res => {
        commit("SET_KEYS", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
};
