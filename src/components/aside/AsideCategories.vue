<template>
  <AsideCategoryList
    :items="listData.items"
  />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { IListData, ICategory } from '@/types'

import AsideCategoryList from '@/components/aside/AsideCategoryList.vue'

class AsideCategoryListProps {
  listData!: IListData<ICategory>
}

@Options({
  components: {
    AsideCategoryList
  }
})
export default class AsideCategories extends Vue.with(AsideCategoryListProps) {}
</script>

<style scoped>

</style>
