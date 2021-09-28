interface IState {
  productsIdsInBasket: number[]
}

export default {
  namespaced: true,

  state: {
    productsIdsInBasket: []
  },

  mutations: {
    addProductIdInBasket (state: IState, productId: number): void {
      state.productsIdsInBasket.push(productId)
    },

    removeProductIdFromBasket (state: IState, productId: number): void {
      const deletedIndex = state.productsIdsInBasket.indexOf(productId)
      state.productsIdsInBasket.splice(deletedIndex, 1)
    },

    clearBasket (state: IState): void {
      state.productsIdsInBasket = []
    }
  },

  getters: {
    hasProductInBasket: (state: IState): (productId: number) => boolean => (productId: number) => {
      return state.productsIdsInBasket.includes(productId)
    },

    basketIsEmpty (state: IState): boolean {
      return !state.productsIdsInBasket.length
    }
  }
}
