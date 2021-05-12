import { useCallback, useEffect, useRef } from 'react'

export const useClickOutsideListenerRef = (onClose) => {
  const ref = useRef(null)
  const escapeListener = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }, [])
  const clickListener = useCallback(
    (e) => {
      if (!(ref.current).contains(e.target)) {
        onClose?.()
      }
    },
    [ref.current],
  )
  useEffect(() => {
    document.addEventListener('click', clickListener)
    document.addEventListener('keyup', escapeListener)
    return () => {
      document.removeEventListener('click', clickListener)
      document.removeEventListener('keyup', escapeListener)
    }
  }, [])
  return ref
}