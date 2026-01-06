// Performance optimization utilities

// Debounce function for scroll events
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function using requestAnimationFrame
export const throttleRAF = (func) => {
  let rafId = null
  let lastArgs = null
  
  const throttled = (...args) => {
    lastArgs = args
    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        func(...lastArgs)
        rafId = null
        lastArgs = null
      })
    }
  }
  
  throttled.cancel = () => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
      lastArgs = null
    }
  }
  
  return throttled
}

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Optimized viewport settings based on performance
export const getViewportSettings = () => {
  const reducedMotion = prefersReducedMotion()
  return {
    once: true,
    amount: reducedMotion ? 0 : 0.2,
    margin: '0px 0px -100px 0px'
  }
}
