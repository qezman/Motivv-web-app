
import { useState, useEffect } from "react"


const isBrowser =
  typeof window !== "undefined" && typeof window.document !== "undefined"

export default function useScript({
  src,
  checkForExisting = false,
  ...attributes
}) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!isBrowser) return

    if (checkForExisting) {
      const existing = document.querySelectorAll(`script[src="${src}"]`)
      if (existing.length > 0) {
        setLoading(false)
        return
      }
    }

    const scriptEl = document.createElement("script")
    scriptEl.setAttribute("src", src)

    Object.keys(attributes).forEach((key) => {
      if (scriptEl[key] === undefined) {
        scriptEl.setAttribute(key, attributes[key])
      } else {
        scriptEl[key] = attributes[key]
      }
    })

    const handleLoad = () => {
      setLoading(false)
    }
    const handleError = (error) => {
      setError(error)
    }

    scriptEl.addEventListener("load", handleLoad)
    scriptEl.addEventListener("error", handleError)

    document.body.appendChild(scriptEl)

    return () => {
      scriptEl.removeEventListener("load", handleLoad)
      scriptEl.removeEventListener("error", handleError)
    }
   
  }, [src,attributes,checkForExisting])

  return [loading, error]
}

