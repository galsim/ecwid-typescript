<template>
  <div class="d-flex justify-content-center">
    <div class="w-25 row align-items-center">
      <div class="col-3">
        <Icon icon="emoji-frown" size="1" />
      </div>

      <div class="col-9">
        <p class="mb-0">Страница не найдена</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Options } from 'vue-class-component'
import Icon from '@/components/Icon'

@Options({
  components: {
    Icon
  }
})
export default class PageNotFound extends Vue {}
</script>

<style scoped>

</style>
