<template>
  <div class="container py-2">
    <AppHeader />

    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

import AppHeader from '@/components/AppHeader.vue'

@Options({
  components: {
    AppHeader
  }
})
export default class App extends Vue {}
</script>
