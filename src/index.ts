import { App, defineAsyncComponent } from 'vue'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import './styles/global.scss'

export const UiInput = defineAsyncComponent(() => import('@components/UiInput.vue'))
export const UiField = defineAsyncComponent(() => import('@components/UiField.vue'))
export const UiSidebar = defineAsyncComponent(() => import('@components/UiSidebar.vue'))
export const UiInputError = defineAsyncComponent(() => import('@components/UiInputError.vue'))
export const UiIcon = defineAsyncComponent(() => import('@components/UiIcon.vue'))
export const UiSidebarElement = defineAsyncComponent(() => import('@components/UiSidebarElement.vue'))
export const UiSwitch = defineAsyncComponent(() => import('@components/UiSwitch.vue'))
export const UiCheckbox = defineAsyncComponent(() => import('@components/UiCheckbox.vue'))
export const UiMenu = defineAsyncComponent(() => import('@components/Menu/UiMenu.vue'))

export default {
  install(app: App) {
    app.component('UiInput', UiInput)
    app.component('UiInputError', UiInputError)
    app.component('UiField', UiField)
    app.component('UiSidebar', UiSidebar)
    app.component('UiSidebarElement', UiSidebarElement)
    app.component('UiIcon', UiIcon)
    app.component('UiSwitch', UiSwitch)
    app.component('UiCheckbox', UiCheckbox)
    app.component('UiMenu', UiMenu)
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UiInput: typeof UiInput
    UiInputError: typeof UiInputError
    UiField: typeof UiField
    UiSidebar: typeof UiSidebar
    UiSidebarElement: typeof UiSidebarElement
    UiIcon: typeof UiIcon
    UiSwitch: typeof UiSwitch
    UiCheckbox: typeof UiCheckbox
    UiMenu: typeof UiMenu
  }
}
