<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: boolean
  caption?: string
  disabled?: boolean
}>()
const emits = defineEmits<{ (e: 'update:modelValue', value: boolean): void }>()

const isActiveClass = computed(() => (props.modelValue ? 'ui-checkbox--active' : ''))
const isDisabledClass = computed(() => (props.disabled ? 'ui-checkbox--disabled' : ''))

const handleClick = () => (props.disabled ? null : emits('update:modelValue', !props.modelValue))
</script>

<template>
  <div :class="['ui-checkbox', isActiveClass, isDisabledClass]" @click="handleClick">
    <div class="ui-checkbox__mark-container">
      <UiIcon class="ui-checkbox__mark" icon="check" v-if="modelValue" />
    </div>
    <span class="ui-checkbox__caption" v-if="caption">
      {{ caption }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.ui-checkbox {
  $self: &;
  height: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  --icon-size: 1rem;
  --icon-color: var(--cp-color-white);

  &__mark-container {
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 0.25rem;
    border: 2px solid var(--cp-color-gray-300);
    background-color: var(--cp-color-white);
    display: grid;
    place-items: center;
  }

  &__caption {
    font-size: 0.835rem;
    color: var(--cp-color-gray-700);
  }

  &--active {
    #{ $self }__mark-container {
      border-color: var(--cp-color-blue-600);
      background-color: var(--cp-color-blue-600);
    }
  }

  &--disabled {
    cursor: not-allowed;
    #{$self}__mark-container {
      border-color: var(--cp-color-gray-300);
      background-color: var(--cp-color-gray-300);
    }
  }
}
</style>
