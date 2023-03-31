<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  error?: boolean
}>()

const classActive = computed(() => (props.error ? 'ui-error-class--active' : ''))
</script>

<template>
  <div :class="['ui-error-class', classActive]">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.ui-error-class {
  &--active {
    :deep(.ui-text-input) {
      box-shadow: 0 0 0 4px var(--cp-color-red-200);
      border-color: var(--cp-color-red-500);

      color: var(--cp-color-red-600);

      &::placeholder {
        color: var(--cp-color-red-400);
      }
    }
  }
}
</style>
