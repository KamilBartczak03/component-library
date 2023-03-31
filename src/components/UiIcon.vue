<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps<{ icon: string }>()

const iconComponent = defineAsyncComponent(() => import(`../icons/${props.icon}.svg`))
</script>

<template>
  <i class="ui-icon">
    <component class="ui-icon" :is="iconComponent" />
  </i>
</template>

<style lang="scss" scoped>
.ui-icon {
  display: flex;
  width: var(--icon-size, 1rem);
  height: var(--icon-size, 1rem);

  :deep(svg) {
    fill: var(--icon-color, var(--cp-color-gray-950));
  }

  :deep(*[stroke]) {
    stroke: var(--icon-color, var(--cp-color-gray-950));
  }
}
</style>
