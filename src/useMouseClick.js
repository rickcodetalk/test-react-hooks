import { useState, useEffect } from 'react'

export function useMouseClick() {
  const [pos, setPos] = useState({x: 0, y:0})
  
  useEffect(() => {
    const handleClick = (e) => setPos({x: e.clientX, y: e.clientY})
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  })
  
  return pos
}