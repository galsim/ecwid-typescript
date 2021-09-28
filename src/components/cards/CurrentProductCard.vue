<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="product.hdThumbnailUrl" class="img-fluid rounded-start" :alt="product.name">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text" v-html="product.description"></p>
          <div class="card-text mb-2">
            <b>Стоимость: </b>
            {{ product.defaultDisplayedPriceFormatted }}
          </div>

          <AppProductToBasketButton :product-id="product.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { IProduct } from '@/types'

import AppProductToBasketButton from '@/components/AddProductToBasketButton.vue'

class CurrentProductCardProps {
  product!: IProduct
}

@Options({
  components: {
    AppProductToBasketButton
  }
})
export default class CurrentProductCard extends Vue.with(CurrentProductCardProps) {}
</script>

<style scoped>

</style>
