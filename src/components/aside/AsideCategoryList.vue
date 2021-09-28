<template>
  <div class="aside-category-list list-group my-2">
    <AsideCategoryItem
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import AsideCategoryItem from '@/components/aside/AsideCategoryItem.vue'
import { ICategory } from '@/types'

class AsideCategoryListProps {
  items!: ICategory[]
}

@Options({
  components: {
    AsideCategoryItem
  }
})
export default class AsideCategoryList extends Vue.with(AsideCategoryListProps) {}
</script>

<style scoped>

</style>
