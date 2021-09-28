<template>
  <div @click="goToCard" class="card my-2">
    <div class="row">
      <div
        :class="`col-${basketView ? 2: 4}`">
        <img class="d-block w-100" :src="item.thumbnailUrl" :alt="item.name">
      </div>

      <div :class="`col-${basketView ? 10: 8}`">
        <div class="card-body">
          <p>{{ item.name }}</p>
          <p>{{ item.defaultDisplayedPriceFormatted }}</p>
          <AddProductToBasketButton v-if="!basketView" :product-id="item.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { IProduct } from '@/types'
import ROUTE_NAME from '@/router/route-name'
import { LocationAsRelativeRaw } from 'vue-router'
import AddProductToBasketButton from '@/components/AddProductToBasketButton.vue'

class ProductLineCardProps {
  item!: IProduct
}

@Options({
  components: {
    AddProductToBasketButton
  },

  inject: ['basketView']
})
export default class ProductLineCard extends Vue.with(ProductLineCardProps) {
  basketView!: boolean | undefined
  get productCardLink (): LocationAsRelativeRaw {
    return {
      name: ROUTE_NAME.PRODUCT_ITEM,
      params: {
        productId: this.item.id
      }
    }
  }

  goToCard (): void {
    this.$router.push(this.productCardLink)
  }
}
</script>

<style scoped>
  .card {
    cursor: pointer
  }

  .card:hover {
    border-color: #0d6efd
  }
</style>
