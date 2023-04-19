<script setup lang="ts">
import { ref } from 'vue'
import type { MenuConfig } from '@/types/menu'

const modelString = ref('')
const expandedNav = ref(false)
const sidebarItems = [
  { icon: 'flag', text: 'feature flag', href: 'https://google.com' },
  { icon: 'heart', text: 'saved', href: 'https://google.com' }
]
const config = [
  { type: 'title', text: 'Access' },
  { icon: 'check', type: 'link', link: '/', text: 'Collaborators' },
  { icon: 'flag', type: 'link', link: '/', text: 'Moderation options' },
  { type: 'title', text: 'Code and automation' },
  { icon: 'close', type: 'link', link: '/', text: 'Branches' },
  { icon: 'heart', type: 'link', link: '/', text: 'Tags' },
  { icon: 'menu', type: 'link', link: '/', text: 'Rules' },
  { icon: 'search', type: 'link', link: '/', text: 'Actions' },
  { icon: 'text-document', type: 'link', link: '/', text: 'Environments' },
  { type: 'title', text: 'Security' },
  { icon: 'flag', type: 'link', link: '/', text: 'Code' },
  { icon: 'check', type: 'link', link: '/', text: 'Pages' }
] as MenuConfig
</script>

<template>
  <main class="display">
    <section>
      <pre>UiMenu.vue</pre>
      <UiMenu :config="config" />
    </section>
    <section>
      <pre>UiCheckbox.vue</pre>
      <UiCheckbox v-model="expandedNav" caption="Expand menu" />
    </section>
    <section>
      <pre>UiCheckbox.vue disabled</pre>
      <UiCheckbox v-model="expandedNav" caption="Expand menu" disabled />
    </section>
    <section>
      <pre>UiSwitch.vue</pre>
      <UiSwitch v-model="expandedNav" caption="Expand menu" />
    </section>
    <section>
      <pre>UiSwitch.vue disabled</pre>
      <UiSwitch v-model="expandedNav" caption="Expand menu" disabled />
    </section>
    <section>
      <pre>UiSidebar.vue</pre>
      <UiSidebar :items="sidebarItems" v-model="expandedNav" />
      <button @click="expandedNav = !expandedNav">expand</button>
    </section>
    <section>
      <pre>UiInput.vue</pre>
      <UiInput v-model="modelString" placeholder="username" />
    </section>
    <section>
      <pre>UiInput.vue password</pre>
      <UiInput v-model="modelString" placeholder="surname" type="number" />
    </section>
    <section>
      <pre>UiInput.vue error</pre>
      <UiInput v-model="modelString" placeholder="surname" error />
    </section>
    <section>
      <pre>UiInput.vue disabled</pre>
      <UiInput v-model="modelString" placeholder="surname" disabled />
    </section>
    <section>
      <pre>UiField.vue -> UiInput.vue error</pre>
      <UiField :error="modelString" label="Password" hint="Must be at least 8 characters">
        <UiInput v-model="modelString" placeholder="Your password" />
      </UiField>
    </section>

    <section>
      <pre>UiField.vue form</pre>
      <form>
        <UiField label="Username">
          <UiInput v-model="modelString" placeholder="Your username" />
        </UiField>
        <UiField label="Password">
          <UiInput v-model="modelString" placeholder="Your password" type="password" />
        </UiField>
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
