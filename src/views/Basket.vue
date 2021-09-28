<template>
  <BasketContainer />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import BasketContainer from '@/components/containers/BasketContainer.vue'

@Options({
  components: {
    BasketContainer
  }
})
export default class Basket extends Vue {}
</script>

<style scoped>

</style>
