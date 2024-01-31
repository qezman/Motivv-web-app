import { useState, useEffect } from 'react'

const useWindowListener = () => {
  const [width, setWidth] = useState(window.innerWidth)

  const setSize = () => {
    setWidth(width)
  }
  useEffect(() => {
    window.addEventListener('resize', setSize)
    return () => window.removeEventListener('resize', setSize)
  })
  return [width]
}

export default useWindowListener