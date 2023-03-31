<script setup lang="ts">
import { computed } from 'vue'
import UiInputError from '@components/UiInputError.vue'

const props = defineProps<{
  placeholder?: string
  modelValue: string
  error?: boolean
  step?: number
  disabled?: boolean
  type?: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const value = computed({
  get: () => props.modelValue,
  set: (value) => emits('update:modelValue', value)
})

const classDisabled = computed(() => (props.disabled ? 'ui-text-input--disabled' : ''))
</script>

<template>
  <UiInputError :error="!!props.error">
    <input
      :class="['ui-text-input', classDisabled]"
      :type="type ?? 'text'"
      :placeholder="placeholder"
      :disabled="disabled"
      :step="step"
      v-model="value"
    />
  </UiInputError>
</template>

<style lang="scss" scoped>
.ui-text-input {
  width: 200px;
  border: solid 1px var(--cp-color-gray-300);
  font-size: 0.875rem;
  height: 2.25rem;
  border-radius: 0.5rem;
  outline: none;
  padding: 0 0.625rem;
  font-weight: 400;

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    font-size: 0.875rem;
    color: var(--cp-color-gray-500);
  }
}
</style>
