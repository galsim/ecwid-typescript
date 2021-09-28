import { createStore } from 'vuex'
import ProductsApi from '@/api/ProductsApi'
import basket from './modules/basket'

export default createStore({
  state: {
    products: null,
    categories: null,
    currentProduct: null,
    productsFromBasket: null
  },
  mutations: {
    saveAllProducts (state, payload) {
      state.products = payload
    },

    clearAllProducts (state) {
      state.products = null
    },

    saveAllCategories (state, payload) {
      state.categories = payload
    },

    clearAllCategories (state) {
      state.categories = null
    },

    saveCurrentProduct (state, payload) {
      state.currentProduct = payload
    },

    clearCurrentProduct (state) {
      state.currentProduct = null
    },

    saveProductsFromBasket (state, payload) {
      state.productsFromBasket = payload
    }
  },
  actions: {
    getAllProducts ({ commit }, categoryId: number) {
      return ProductsApi
        .getAllProducts(categoryId)
        .then((res) => {
          commit('saveAllProducts', res.data)
        })
    },

    getAllCategories ({ commit }) {
      return ProductsApi
        .getAllCategories()
        .then((res) => {
          commit('saveAllCategories', res.data)
        })
    },

    getCurrentProduct ({ commit }, productId: number) {
      return ProductsApi
        .getCurrentProduct(productId)
        .then((res) => {
          commit('saveCurrentProduct', res.data)
        })
    },

    getProductsFromBasket ({ commit }, productIds) {
      return ProductsApi
        .getProductsFromBasket(productIds)
        .then((res) => {
          commit('saveProductsFromBasket', res.data)
        })
    }
  },
  modules: {
    basket
  }
})
