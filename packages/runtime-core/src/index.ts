// Types
export { VNode } from './vnode'
export { FunctionalComponent } from './component'
export { RendererOptions } from './createRenderer'
export { Slot, Slots } from './componentSlots'
export { PropType, ComponentPropsOptions } from './componentProps'

// API
export {
  openBlock,
  createBlock,
  createVNode,
  cloneVNode,
  mergeProps
} from './vnode'
export { createComponent, getCurrentInstance } from './component'
export { createRenderer } from './createRenderer'
export { nextTick } from './scheduler'
export * from './apiReactivity'
export * from './apiWatch'
export * from './apiLifecycle'
export * from './apiInject'

// VNode type symbols
export { Text, Empty, Fragment, Portal } from './vnode'

// VNode flags
export { PublicPatchFlags as PatchFlags } from './patchFlags'
export { PublicShapeFlags as ShapeFlags } from './shapeFlags'
