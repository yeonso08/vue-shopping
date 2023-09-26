import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    likedProducts: [], // array of product IDs
  },
  mutations: {
    TOGGLE_LIKE(state, productId) {
      if (state.likedProducts.includes(productId)) {
        state.likedProducts = state.likedProducts.filter(
          id => id !== productId
        );
      } else {
        state.likedProducts.push(productId);
      }
    },
  },
  actions: {
    toggleLike({ commit }, productId) {
      commit("TOGGLE_LIKE", productId);
    },
  },
  getters: {
    isProductLiked: state => productId => {
      return state.likedProducts.includes(productId);
    },
  },
});
