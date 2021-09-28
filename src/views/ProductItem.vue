<template>
  <CurrentProductContainer
    :product-id="productId"
  />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

import CurrentProductContainer from '@/components/containers/CurrentProductContainer.vue'

@Options({
  components: {
    CurrentProductContainer
  }
})
export default class ProductItem extends Vue {
  get productId (): number {
    return +this.$route.params.productId
  }
}
</script>

<style scoped>

</style>
