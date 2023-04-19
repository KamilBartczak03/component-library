export interface MenuBaseRecord {
  type: string
  text: string
  icon?: string
}

export interface MenuLinkRecord extends MenuBaseRecord {
  type: 'link'
  link: string
}

export interface MenuTitleRecord extends MenuBaseRecord {
  type: 'title'
}

export type MenuConfig = (MenuTitleRecord | MenuLinkRecord)[]
