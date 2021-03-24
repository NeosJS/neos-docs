import { hasOwn } from './util'
export const isVNode = node => {
  return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions')
}
export const getFirstComponentChild = children => {
  return children && children.filter(c => c && c.tag)[0]
}
