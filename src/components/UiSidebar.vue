<script setup lang="ts">
import { computed } from 'vue'
import UiSidebarElement from '@components/UiSidebarElement.vue'

export interface NavItem {
  text: string
  icon: string
  href: string
  onClick?: () => void
}

const props = defineProps<{
  modelValue: boolean
  items: NavItem[]
}>()

const classExpanded = computed(() => (props.modelValue ? 'ui-sidebar--expanded' : ''))
</script>

<template>
  <nav :class="['ui-sidebar', classExpanded]">
    <UiSidebarElement v-for="item in items" v-bind="item" :expanded="modelValue" />
  </nav>
</template>

<style lang="scss" scoped>
.ui-sidebar {
  color: var(--cp-color-white);
  background-color: var(--cp-color-blue-700);
  border-radius: 1rem;
  padding: 1rem 0;
  border: 0.25rem solid var(--cp-color-white);
  box-sizing: content-box;
  width: 4rem;
  transition: width 200ms ease;

  --icon-color: var(--cp-color-white);
  --icon-size: 1.25rem;

  &--expanded {
    width: 16rem;
  }
}
</style>
