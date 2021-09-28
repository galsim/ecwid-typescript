<template>
  <LoadingBlock
    :request="() => getAllProducts(categoryId)"
    ref="product-loader"
  >
    <ProductsList
      :listData="products"
    />
  </LoadingBlock>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapActions, mapMutations, mapState } from 'vuex'

import LoadingBlock from '@/components/LoadingBlock.vue'
import ProductsList from '@/components/ProductsList.vue'
import { IListData, IProduct } from '@/types'

class ProductsProps {
  categoryId!: number
}

@Options({
  computed: mapState([
    'products'
  ]),

  methods: {
    ...mapActions([
      'getAllProducts'
    ]),

    ...mapMutations([
      'clearAllProducts'
    ])
  },

  components: {
    ProductsList,
    LoadingBlock
  },

  watch: {
    categoryId () {
      this.$refs['product-loader'].callRequest()
    }
  }
})
export default class Products extends Vue.with(ProductsProps) {
  products!: IListData<IProduct>
  getAllProducts!: (categoryId: number) => Promise<void>
  clearAllProducts!: () => void

  beforeUnmount (): void {
    this.clearAllProducts()
  }
}
</script>

<style scoped>

</style>
