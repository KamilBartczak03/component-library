<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ placeholder?: string; modelValue: string }>();
const emits = defineEmits<{ (e: "update:modelValue", value: string): void }>();

const value = computed({
  get: () => props.modelValue,
  set: (value) => emits("update:modelValue", value),
});
</script>

<template>
  <input
    class="ui-text-input"
    type="text"
    :placeholder="placeholder"
    v-model="value"
  />
</template>

<style lang="scss" scoped>
.ui-text-input {
  width: 200px;
  border: solid 1px #ddd;
  font-size: 0.875rem;
  height: 2.25rem;
  border-radius: 0.5rem;
  outline: none;
  padding: 0 0.625rem;
  font-weight: 400;

  &::placeholder {
    color: #999;
  }
}
</style>
