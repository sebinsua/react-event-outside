// @flow

import type { ComponentType } from 'react'

const getDisplayName = (Component: ComponentType<*>): string =>
  Component.displayName || Component.name || 'Component'

const wrapDisplayName = (
  BaseComponent: ComponentType<*>,
  hocName: string
): string => `${hocName}(${getDisplayName(BaseComponent)})`

export default wrapDisplayName
