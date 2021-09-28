<template>
  <LoadingBlock
    :request="getAllCategories"
  >
    <AsideCategories
      :list-data="categories"
    />
  </LoadingBlock>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { mapActions, mapMutations, mapState } from 'vuex'

import LoadingBlock from '@/components/LoadingBlock.vue'
import AsideCategories from '@/components/aside/AsideCategories.vue'
import { ICategory, IListData } from '@/types'

@Options({
  computed: {
    ...mapState([
      'categories'
    ])
  },

  methods: {
    ...mapActions([
      'getAllCategories'
    ]),

    ...mapMutations([
      'clearAllCategories'
    ])
  },

  components: {
    LoadingBlock,
    AsideCategories
  }
})
export default class CategoriesContainer extends Vue {
  clearAllCategories!: () => void
  getAllCategories!: () => Promise<void>
  categories!: IListData<ICategory>

  beforeUnmount (): void {
    this.clearAllCategories()
  }
}
</script>

<style scoped>

</style>
