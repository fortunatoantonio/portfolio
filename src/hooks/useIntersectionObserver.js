import { useEffect, useRef } from 'react'

/**
 * Adds the `visible` CSS class when the element enters the viewport.
 * Works with .fade-up and .fade-left utility classes defined in index.css.
 *
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Intersection ratio to trigger (default 0.15)
 * @param {string} options.rootMargin - Root margin (default '0px')
 * @returns {React.RefObject} ref to attach to the target element
 */
export default function useIntersectionObserver({
  threshold = 0.15,
  rootMargin = '0px',
} = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el) // animate only once
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}
