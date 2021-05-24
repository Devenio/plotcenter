import EventService from "@/services/EventService.js";

export const state = () => ({
  token: ""
});

export const getters = {
  token: state => {
    return state.token;
  }
};

export const mutations = {
  SET_TOKEN: (state, data) => {
    state.token = data;
  }
};

export const actions = {
  setToken: ({ commit }, data) => {
    commit("SET_TOKEN", data);
  },
  clearToken: ({ commit }) => {
    commit("SET_TOKEN", "")
  }
};
