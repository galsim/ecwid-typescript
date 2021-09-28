<template>
  <router-link
    :to="link"
    class="list-group-item text-decoration-none"
    active-class="active"
  >
    {{ item.name }}
  </router-link>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { ICategory } from '@/types'
import ROUTE_NAME from '@/router/route-name'
import { LocationAsRelativeRaw } from 'vue-router'

class AsideCategoryItemProps {
  item!: ICategory
}

export default class AsideCategoryItem extends Vue.with(AsideCategoryItemProps) {
  get link (): LocationAsRelativeRaw {
    return {
      name: ROUTE_NAME.MAIN,
      params: {
        categoryId: this.item.id
      }
    }
  }
}
</script>

<style scoped>

</style>
