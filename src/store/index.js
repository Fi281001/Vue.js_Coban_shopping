import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    addProduct(state, cart) {
      const existingcart = state.cart.find((p) => p.id === cart.id);

      if (existingcart) {
        existingcart.quantity += 1; // Tăng số lượng sản phẩm đã tồn tại trong giỏ hàng thêm 1
      } else {
        cart.quantity = 1; // Đặt số lượng sản phẩm là 1 nếu chưa tồn tại trong giỏ hàng
        state.cart.push(cart); // Thêm sản phẩm vào giỏ hàng
      }
    },
    removeProduct(state, id) {
      state.cart = state.cart.filter((p) => p.id != id);
    },
    increase(state, id) {
      state.cart.map((p) => {
        if (p.id == id) {
          p.quantity += 1;
        }
      });
    },
    decrease(state, id) {
      state.cart.map((p) => {
        if (p.id == id && p.quantity > 1) {
          p.quantity -= 1;
        }
      });
    },
  },
  actions: {
    addProduct({ commit }, product) {
      commit("addProduct", product);
    },
    removeProduct({ commit }, id) {
      commit("removeProduct", id);
    },
    increase({ commit }, id) {
      commit("increase", id);
    },
    decrease({ commit }, id) {
      commit("decrease", id);
    },
  },
  getters: {
    getCart: (state) => {
      return state.cart;
    },
    getTotal: (state) => {
      let total = 0;
      state.cart.map((p) => {
        total += p.price * p.quantity;
      });
      return total;
    },
    getSum: (state) => {
      let sum = 0;
      state.cart.map((p) => {
        sum += p.quantity;
      });
      return sum;
    },
  },
  modules: {},
});
