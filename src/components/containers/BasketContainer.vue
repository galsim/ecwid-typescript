<template>
  <div v-if="basketIsEmpty">
    В корзине пока пусто
  </div>

  <LoadingBlock
    v-else
    :request="() => getProductsFromBasket(productsIdsInBasket)"
  >
    <ProductsList
      :listData="productsFromBasket"
    />

    <MakeOrderButton />
  </LoadingBlock>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { mapActions, mapGetters, mapState } from 'vuex'
import LoadingBlock from '@/components/LoadingBlock.vue'
import ProductsList from '@/components/ProductsList.vue'
import Popup from '@/components/Popup.vue'
import MakeOrderButton from '@/components/MakeOrderButton.vue'

@Options({
  components: {
    LoadingBlock,
    ProductsList,
    MakeOrderButton,
    Popup
  },

  computed: {
    ...mapGetters('basket', ['basketIsEmpty']),

    ...mapState(
      'basket', ['productsIdsInBasket']
    ),

    ...mapState([
      'productsFromBasket'
    ])
  },

  provide () {
    return {
      basketView: true
    }
  },

  methods: {
    ...mapActions([
      'getProductsFromBasket'
    ])
  }
})
export default class BasketContainer extends Vue {
  basketIsEmpty!: boolean
  productsFromBasket!: number[]
  productsIdsInBasket!: number[]
}
</script>

<style scoped>

</style>
