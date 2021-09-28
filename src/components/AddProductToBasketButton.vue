<template>
  <div>
    <AppButton v-if="hasItem" @click.stop="removeItem">Удалить</AppButton>
    <AppButton v-else @click.stop="addItem">Купить</AppButton>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { mapMutations, mapState, mapGetters } from 'vuex'
import AppButton from '@/components/AppButton.vue'

class AddProductToBasketButtonProps {
  productId!: number
}

@Options({
  components: {
    AppButton
  },

  computed: {
    ...mapState('basket', [
      'productsIdsInBasket'
    ]),

    ...mapGetters('basket', [
      'hasProductInBasket'
    ])
  },

  methods: {
    ...mapMutations('basket', [
      'addProductIdInBasket',
      'removeProductIdFromBasket'
    ])
  }
})
export default class AddProductToBasketButton extends Vue.with(AddProductToBasketButtonProps) {
  hasProductInBasket!: (productId: number) => boolean
  addProductIdInBasket!: (productId: number) => void
  removeProductIdFromBasket!: (productId: number) => void

  addItem (): void {
    this.addProductIdInBasket(this.productId)
  }

  removeItem (): void {
    this.removeProductIdFromBasket(this.productId)
  }

  get hasItem (): boolean {
    return this.hasProductInBasket(this.productId)
  }
}
</script>

<style scoped>

</style>
