<template>
  <div class="line-list-view">
    <ProductLineCard
      v-for="(item, idx) in items"
      :key="idx"
      :item="item"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Options, prop } from 'vue-class-component'
import ProductLineCard from '@/components/cards/ProductLineCard.vue'
import { IProduct } from '@/types'

class LineListViewProps {
  items = prop<IProduct[]>({ required: true })
}
@Options({
  components: {
    ProductLineCard
  }
})
export default class LineListView extends Vue.with(LineListViewProps) {}
</script>

<style scoped>

</style>
