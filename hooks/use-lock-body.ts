import * as React from "react"

export function useLockBody(unlockFn?: () => void) {
  React.useLayoutEffect((): (() => void) => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = "hidden"

    return () => {
      // Call the provided unlock function if it exists
      unlockFn?.()
      // Or use a default unlock behavior if no function is provided
      document.body.style.overflow = originalStyle
    }
  }, [unlockFn]) // Add unlockFn to the dependency array
}
