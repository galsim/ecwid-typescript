<template>
  <LineListView
    v-if="isLineView"
    :items="items"
  />
</template>

<script lang="ts">
import { Vue, Options, prop } from 'vue-class-component'
import LineListView from '@/components/list-view/LineListView.vue'
import type { IProduct } from '@/types'
import { LIST_VIEW } from '@/const'

class ListViewFactoryProps {
 view = prop<string>({
   default: LIST_VIEW.LINE
 })

  items = prop<IProduct>({ required: true })
}

@Options({
  components: {
    LineListView
  }
})
export default class ListViewFactory extends Vue.with(ListViewFactoryProps) {
  get isLineView (): boolean {
    return this.view === LIST_VIEW.LINE
  }
}
</script>

<style scoped>

</style>
