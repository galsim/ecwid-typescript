<template>
  <div>
    <template v-if="listData.items.length">
      <ListViewFactory
        :items="listData.items"
      />
    </template>

    <NoData v-else />
  </div>
</template>

<script lang="ts">
// TODO: Pagination
import { Vue, Options } from 'vue-class-component'
import { IListData, IProduct } from '@/types'

/* Components */
import ListViewFactory from '@/components/list-view/ListViewFactory.vue'
import NoData from '@/components/NoData.vue'

class ProductsListProps {
  listData!: IListData<IProduct>
}

@Options({
  components: {
    ListViewFactory,
    NoData
  }
})
export default class ProductsList extends Vue.with(ProductsListProps) {}
</script>

<style scoped>

</style>
