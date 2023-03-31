import './styles/global.scss'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import { defineAsyncComponent } from 'vue'

export const UiInput = defineAsyncComponent(() => import('./components/UiInput.vue'))
export const UiField = defineAsyncComponent(() => import('./components/UiField.vue'))
