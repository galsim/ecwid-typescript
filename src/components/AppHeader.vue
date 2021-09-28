<template>
  <div class="border rounded mb-2 p-2 d-flex justify-content-between">
    <router-link :to="goToMain">
      <AppButton
        :outline="true"
        type="info"
      >
        <Icon icon="house" />
      </AppButton>
    </router-link>

    <router-link :to="toBasketLink">
      <AppButton
        :outline="true"
        type="info"
      >
        <Icon icon="basket" />
      </AppButton>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Icon from '@/components/Icon.vue'
import AppButton from '@/components/AppButton.vue'
import ROUTE_NAME from '@/router/route-name'
import { LocationAsRelativeRaw } from 'vue-router'

@Options({
  components: {
    Icon,
    AppButton
  }
})
export default class AppHeader extends Vue {
  get toBasketLink (): LocationAsRelativeRaw {
    return {
      name: ROUTE_NAME.BASKET
    }
  }

  get goToMain (): LocationAsRelativeRaw {
    return {
      name: ROUTE_NAME.MAIN
    }
  }
}
</script>

<style scoped>

</style>
