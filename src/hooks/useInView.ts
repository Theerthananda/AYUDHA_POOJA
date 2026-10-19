import { useEffect, useRef, useState } from 'react'

export function useInView<T extends Element>(threshold = 0.16) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const item = ref.current
    if (!item) return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold })
    observer.observe(item)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}
