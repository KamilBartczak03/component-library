<script setup lang="ts">
import { computed } from 'vue'
import UiInputError from '@components/UiInputError.vue'

const props = defineProps<{
  error?: string
  label?: string
  hint?: string
}>()

const id = crypto.randomUUID()
const classError = computed(() => (props.error ? 'ui-field--error' : ''))
</script>

<template>
  <label :class="['ui-field', classError]">
    <label class="ui-field__label" :for="id"> {{ label }}</label>
    <UiInputError :error="!!error">
      <slot :error="error" :id="id" />
    </UiInputError>
    <div class="ui-field__hints">
      <span v-if="error" class="ui-field__error">{{ error }}</span>
      <span v-if="hint" class="ui-field__hint">{{ hint }}</span>
    </div>
  </label>
</template>

<style lang="scss" scoped>
.ui-field {
  display: flex;
  flex-direction: column;
  gap: 0.325rem;

  &__label {
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    color: var(--cp-color-gray-900);
    font-weight: 500;
  }

  &__hints {
    display: flex;
    flex-direction: column;
  }

  &__error {
    margin-top: 0.125rem;
    font-size: 0.75rem;
    color: var(--cp-color-red-600);
  }

  &__hint {
    font-size: 0.75rem;
    color: var(--cp-color-gray-700);
  }
}

.ui-field {
}
</style>
