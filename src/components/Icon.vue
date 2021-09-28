<template>
  <i
    :class="classes"
  />
</template>

<script lang="ts">
import { Vue, prop, WithDefault } from 'vue-class-component'

class IconProps {
  icon!: string

  size: WithDefault<string> = prop<string>({ default: '3' })
}

export default class Icon extends Vue.with(IconProps) {
  get classes (): string[] {
    return ['bi', `fs-${this.size}`, `bi-${this.icon}`]
  }
}
</script>

<style scoped>

</style>
