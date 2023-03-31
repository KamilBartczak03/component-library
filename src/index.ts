import { defineAsyncComponent } from 'vue'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import './styles/global.scss'

const UiInput = defineAsyncComponent(() => import('./components/UiInput.vue'))
const UiField = defineAsyncComponent(() => import('./components/UiField.vue'))
const UiSidebar = defineAsyncComponent(() => import('./components/UiSidebar.vue'))
const UiInputError = defineAsyncComponent(() => import('./components/UiInputError.vue'))
const UiIcon = defineAsyncComponent(() => import('./components/UiIcon.vue'))
const UiSidebarElement = defineAsyncComponent(() => import('./components/UiSidebarElement.vue'))

export default {
  UiInput,
  UiField,
  UiSidebar,
  UiInputError,
  UiIcon,
  UiSidebarElement
}
