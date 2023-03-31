<script setup lang="ts">
import Component from '../index'
import { ref } from 'vue'

const modelString = ref('')
const expandedNav = ref(false)
const sidebarItems = [
  { icon: 'flag', text: 'feature flag', href: 'https://google.com' },
  { icon: 'heart', text: 'saved', href: 'https://google.com' }
]
</script>

<template>
  <main class="display">
    <section>
      <pre>UiSidebar.vue</pre>
      <Component.UiSidebar :items="sidebarItems" v-model="expandedNav" />
      <button @click="expandedNav = !expandedNav">expand</button>
    </section>
    <section>
      <pre>UiInput.vue</pre>
      <Component.UiInput v-model="modelString" placeholder="username" />
    </section>
    <section>
      <pre>UiInput.vue password</pre>
      <Component.UiInput v-model="modelString" placeholder="surname" type="number" />
    </section>
    <section>
      <pre>UiInput.vue error</pre>
      <Component.UiInput v-model="modelString" placeholder="surname" error />
    </section>
    <section>
      <pre>UiInput.vue disabled</pre>
      <Component.UiInput v-model="modelString" placeholder="surname" disabled />
    </section>
    <section>
      <pre>UiField.vue -> UiInput.vue error</pre>
      <Component.UiField :error="modelString" label="Password" hint="Must be at least 8 characters">
        <Component.UiInput v-model="modelString" placeholder="Your password" />
      </Component.UiField>
    </section>

    <section>
      <pre>UiField.vue form</pre>
      <form>
        <Component.UiField label="Username">
          <Component.UiInput v-model="modelString" placeholder="Your username" />
        </Component.UiField>
        <Component.UiField label="Password">
          <Component.UiInput v-model="modelString" placeholder="Your password" type="password" />
        </Component.UiField>
      </form>
    </section>
  </main>
</template>

<style lang="scss">
main.display {
  section {
    margin: 2rem;
    padding: 1rem;
    background-color: var(--cp-color-gray-50);
    border-radius: 0.25rem;

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    pre {
      height: 1rem;
      background-color: var(--cp-color-gray-100);
      margin-top: 0;
      white-space: nowrap;
      width: min-content;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
    }
  }
}
</style>
