import React from 'react'
import { useWindowWidth } from './useWindowWidth'
import { useMouseClick } from './useMouseClick'

function MyResponsiveComponent() {
  const width = useWindowWidth() // Our custom Hook
  const pos = useMouseClick()
  return (
    <>
      <p>Window width is {width}</p>
      <p>Mouse pos is {pos.x}, {pos.y}</p>
    </>
  )
}

export default MyResponsiveComponent