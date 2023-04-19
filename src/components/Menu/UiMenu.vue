<script lang="ts" setup>
import type { MenuConfig, MenuLinkRecord, MenuBaseRecord } from './types'

const props = defineProps<{ config: MenuConfig }>()

const recordToLink = (r: MenuLinkRecord) => ({
  component: 'RouterLink',
  props: {
    to: r.link,
    class: 'ui-menu__element ui-menu__element--link'
  },
  text: r.text,
  icon: r.icon
})
const recordToTitle = (r: MenuBaseRecord) => ({
  component: 'b',
  props: {
    class: 'ui-menu__element ui-menu__element--title'
  },
  text: r.text,
  icon: r.icon
})

function createComponents(config: MenuConfig) {
  return config.map((record) => {
    if (record.type === 'title') return recordToTitle(record)
    if (record.type === 'link') return recordToLink(record)
    throw new Error('Unknown record type passed in config')
  })
}
</script>

<template>
  <nav class="ui-menu">
    <component v-for="option in createComponents(props.config)" :is="option.component" v-bind="option.props">
      <UiIcon v-if="option.icon" :icon="option.icon" class="ui-menu__element-icon" />
      {{ option.text }}
    </component>
  </nav>
</template>

<style lang="scss" scoped>
.ui-menu {
  color: var(--cp-color-gray-0);
  background-color: var(--cp-color-gray-800);
  padding: var(--cp-size-2);
  border-radius: var(--cp-radius-small);

  &__element {
    display: flex;
    align-items: center;

    &--link {
      padding: var(--cp-size-0);
      text-decoration: none;
      color: var(--cp-color-gray-100);

      &:hover {
        background-color: var(--cp-color-gray-900);
        border-radius: var(--cp-radius-small);
      }
    }

    &--title {
      color: var(--cp-color-gray-300);
      padding: var(--cp-size-3) var(--cp-size-0) var(--cp-size-0) var(--cp-size-0);
      font-size: var(--cp-size-tiny);
      border-top: 1px solid var(--cp-color-gray-600);
      margin-top: var(--cp-size-2);

      &:first-of-type {
        border-top: none;
        margin-top: 0;
        padding-top: var(--cp-size-1);
      }
    }
  }

  &__element-icon {
    --icon-color: var(--cp-color-gray-100);
    margin-right: var(--cp-size-1);
  }
}
</style>
