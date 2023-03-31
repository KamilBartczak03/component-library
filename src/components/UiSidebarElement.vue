<script setup lang="ts">
import UiIcon from '@components/UiIcon.vue'
import { computed } from 'vue'

const props = defineProps<{
  expanded: boolean
  text: string
  icon: string
  href: string
  onClick?: () => void
}>()

const classExpanded = computed(() => (props.expanded ? 'ui-sidebar-element--expanded' : ''))
</script>

<template>
  <RouterLink :to="href" :class="['ui-sidebar-element', classExpanded]" @click="onClick">
    <div class="ui-sidebar-element__icon-container">
      <UiIcon :icon="icon" />
    </div>
    <div class="ui-sidebar-element__text-container">{{ text }}</div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.ui-sidebar-element {
  overflow: hidden;
  display: flex;
  align-items: center;
  white-space: nowrap;
  width: 2.5rem;
  height: 2.5rem;
  margin: 0.75rem;
  padding: 0.25rem;
  text-decoration: none;
  box-sizing: border-box;
  border-radius: 0.25rem;
  transition: width 200ms ease;
  cursor: pointer;

  &__icon-container {
    --icon-color: var(--cp-color-white);
    --icon-size: 1.25rem;
    margin: 0.375rem;
  }

  &__text-container {
    margin-left: 0.5rem;
    font-size: 0.825rem;
    font-weight: 500;
    color: var(--cp-color-white);
  }

  &:hover {
    background-color: var(--cp-color-blue-600);
  }

  &--expanded {
    width: 14.5rem;
  }
}
</style>
