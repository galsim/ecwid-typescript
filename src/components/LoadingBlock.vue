<template>
  <div class="loading" v-if="loading">
    <Preloader />
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import Preloader from '@/components/Preloader.vue'

class LoadingBlockProps {
  request!: () => Promise<unknown>

  changeParam?: string
}

@Options({
  components: {
    Preloader
  }
})
export default class LoadingBlock extends Vue.with(LoadingBlockProps) {
  loading = true

  async callRequest (): Promise<void> {
    this.loading = true

    await this.request()

    this.loading = false
  }

  created (): void {
    this.callRequest()
  }
}
</script>

<style scoped>

</style>
