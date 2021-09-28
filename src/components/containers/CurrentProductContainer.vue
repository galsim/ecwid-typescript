<template>
  <LoadingBlock
    :request="() => getCurrentProduct(productId)"
  >
    <CurrentProductCard :product="currentProduct" />
  </LoadingBlock>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { mapActions, mapMutations, mapState } from 'vuex'

import LoadingBlock from '@/components/LoadingBlock.vue'
import CurrentProductCard from '@/components/cards/CurrentProductCard.vue'
import { IProduct } from '@/types'

class CurrentProductContainerProps {
  productId!: number
}

@Options({
  components: {
    LoadingBlock,
    CurrentProductCard
  },
  methods: {
    ...mapActions([
      'getCurrentProduct'
    ]),

    ...mapMutations([
      'clearCurrentProduct'
    ])
  },
  computed: mapState([
    'currentProduct'
  ])
})
export default class CurrentProductContainer extends Vue.with(CurrentProductContainerProps) {
  getCurrentProduct!: (productId: number) => Promise<void>
  clearCurrentProduct!: () => void
  currentProduct!: IProduct

  beforeUnmount (): void {
    this.clearCurrentProduct()
  }
}
</script>

<style scoped>

</style>
