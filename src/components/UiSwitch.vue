<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: boolean
  caption?: string
  disabled?: boolean
}>()
const emits = defineEmits<{ (e: 'update:modelValue', value: boolean): void }>()

const isActiveClass = computed(() => (props.modelValue ? 'ui-switch--active' : ''))
const isDisabledClass = computed(() => (props.disabled ? 'ui-switch--disabled' : ''))

const handleClick = () => (props.disabled ? null : emits('update:modelValue', !props.modelValue))
</script>

<template>
  <div :class="['ui-switch', isActiveClass, isDisabledClass]">
    <div class="ui-switch__button" @click="handleClick" />
    <div class="ui-switch__caption" v-if="caption">
      {{ caption }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ui-switch {
  $self: &;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &__button {
    height: 1.5rem;
    width: 2.5rem;
    flex-shrink: 0;
    border-radius: 1rem;
    background-color: var(--cp-color-gray-300);
    position: relative;

    &::after {
      transition: left 100ms ease;
      content: '';
      position: absolute;
      left: 0.25rem;
      top: 0.25rem;
      display: block;
      height: 1rem;
      width: 1rem;
      border-radius: 0.75rem;
      background-color: var(--cp-color-white);
      box-sizing: border-box;
    }
  }

  &__caption {
    font-size: 0.835rem;
    color: var(--cp-color-gray-700);
  }

  &--active {
    #{ $self }__button {
      background-color: var(--cp-color-blue-600);

      &::after {
        left: 1.25rem;
      }
    }
  }

  &--disabled {
    cursor: not-allowed;

    #{ $self }__button {
      background-color: var(--cp-color-gray-300);

      &::after {
        background-color: var(--cp-color-gray-100);
      }
    }
  }
}
</style>
