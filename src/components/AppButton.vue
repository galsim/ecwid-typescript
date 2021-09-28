<template>
  <button
    :class="['btn', buttonTypeClass]"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, prop, Options } from 'vue-class-component'

enum BUTTON_TYPE {
  PRIMARY = 'primary',
  INFO = 'info',
  SECONDARY = 'secondary',
  CLOSE = 'close',
}

class AppButtonProps {
  type = prop<string>({
    default: BUTTON_TYPE.PRIMARY,
    validator: (value: BUTTON_TYPE): boolean => [
      BUTTON_TYPE.PRIMARY,
      BUTTON_TYPE.INFO,
      BUTTON_TYPE.SECONDARY,
      BUTTON_TYPE.CLOSE
    ].includes(value)
  })

  outline = prop<boolean>({ default: false })
}

@Options({
  emits: ['click']
})
export default class AppButton extends Vue.with(AppButtonProps) {
  get buttonTypeClass (): string {
    const classArray = ['btn']

    if (this.outline) classArray.push('outline')

    classArray.push(this.type)

    return classArray.join('-')
  }
}
</script>

<style scoped>

</style>
