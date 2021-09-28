<template>
  <div>
    <div class="modal-backdrop opacity-50"></div>
    <div class="modal fade show d-block">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ modalTitle }}</h5>
            <AppButton
              type="close"
              @click="$emit('close')"
            />
          </div>
          <div class="modal-body">
            <p>{{ modalText }}</p>
          </div>
          <div class="modal-footer">
            <AppButton type="secondary" @click="$emit('close')">Close</AppButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import AppButton from '@/components/AppButton.vue'

class PopupProps {
  modalTitle?: string
  modalText?: string
}

@Options({
  components: {
    AppButton
  }
})
export default class Popup extends Vue.with(PopupProps) {}
</script>

<style scoped>

</style>
