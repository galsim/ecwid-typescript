<template>
  <div class="row">
    <div class="col-2">
      <CategoriesContainer />
    </div>

    <div class="col-10">
      <ProductsContainer
        :category-id="categoryId"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ProductsContainer from '@/components/containers/ProductsContainer.vue'
import CategoriesContainer from '@/components/containers/CategoriesContainer.vue'

@Options({
  components: {
    ProductsContainer,
    CategoriesContainer
  }
})
export default class Products extends Vue {
  get categoryId (): number {
    return +this.$route.params.categoryId || 0
  }
}
</script>
