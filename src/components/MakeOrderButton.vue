<template>
  <div>
    <AppButton @click="showOrderPopup">
      Оформить заказ
    </AppButton>
    <Popup
      v-if="showPopup"
      modal-title="Оформление заказа"
      modal-text="Поздравляем с покупкой"
      @close="closeOrderPopup"
    >
      Поздравляем с покупкой
    </Popup>
  </div>
</template>

<script lang="ts">
import AppButton from '@/components/AppButton.vue'
import Popup from '@/components/Popup.vue'
import { Vue, Options } from 'vue-class-component'
import { mapMutations } from 'vuex'

@Options({
  components: {
    AppButton,
    Popup
  },

  methods: {
    ...mapMutations('basket', ['clearBasket'])
  }
})
export default class MakeOrderButton extends Vue {
  clearBasket!: () => void

  showPopup = false

  showOrderPopup (): void {
    this.showPopup = true
  }

  closeOrderPopup (): void {
    this.showPopup = false
    this.clearBasket()
  }
}
</script>

<style scoped>

</style>
