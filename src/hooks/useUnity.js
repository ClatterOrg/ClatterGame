import { useEffect, useRef, useState } from 'react'
import { getAssetPath } from '../utils/paths'

const useUnity = (canvasRef) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const unityInstanceRef = useRef(null)
  const scriptLoadedRef = useRef(false)
  const containerRef = useRef(null)

  // Handle responsive resize
  useEffect(() => {
    if (!canvasRef.current || !unityInstanceRef.current) return

    const canvas = canvasRef.current
    const container = canvas.parentElement
    if (!container) return

    const handleResize = () => {
      if (!unityInstanceRef.current || !canvas) return

      const containerWidth = container.clientWidth
      const containerHeight = container.clientHeight

      // Set canvas CSS size to match container (display size)
      canvas.style.width = `${containerWidth}px`
      canvas.style.height = `${containerHeight}px`

      // Try to notify Unity about the resize
      // Unity will handle the actual rendering resolution internally
      try {
        // Try to send resize message to Unity if available
        if (unityInstanceRef.current && unityInstanceRef.current.SendMessage) {
          unityInstanceRef.current.SendMessage('Canvas', 'OnResize', `${containerWidth},${containerHeight}`)
        }
      } catch (e) {
        // Unity might not have this handler, that's okay
        // The canvas CSS sizing will still work for responsive display
      }

      // Also try Module.resize if available (Unity WebGL pattern)
      if (window.Module && typeof window.Module.resize === 'function') {
        try {
          window.Module.resize(containerWidth, containerHeight)
        } catch (e) {
          // Module.resize not available, that's okay
        }
      }
    }

    // Initial resize
    handleResize()

    // Listen for resize events
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)

    // Use ResizeObserver for more precise container size changes
    let resizeObserver
    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver(() => {
        handleResize()
      })
      resizeObserver.observe(container)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
    }
  }, [canvasRef, loading])

  useEffect(() => {
    if (!canvasRef.current || scriptLoadedRef.current) return

    const canvas = canvasRef.current
    containerRef.current = canvas.parentElement

    // Load Unity loader script
    const script = document.createElement('script')
    script.src = getAssetPath('build/Web Build 1.loader.js')
    script.async = true

    script.onload = () => {
      if (window.createUnityInstance && canvas) {
        // Handle wheel events for scrolling
        const handleWheel = (e) => {
          window.scrollBy({ top: e.deltaY, behavior: 'auto' })
        }
        canvas.addEventListener('wheel', handleWheel)

        // Create Unity instance
        window.createUnityInstance(canvas, {
          dataUrl: getAssetPath('build/Web Build 1.data.unityweb'),
          frameworkUrl: getAssetPath('build/Web Build 1.framework.js.unityweb'),
          codeUrl: getAssetPath('build/Web Build 1.wasm.unityweb'),
          streamingAssetsUrl: 'StreamingAssets',
          companyName: 'YourCompany',
          productName: 'Clatter',
          productVersion: '1.0',
          backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
          webGLContextAttributes: { alpha: true, preserveDrawingBuffer: false },
        })
          .then((unityInstance) => {
            unityInstanceRef.current = unityInstance
            setLoading(false)
            console.log('Unity WebGL loaded!')
            
            // Trigger initial resize after load
            setTimeout(() => {
              if (canvas && canvas.parentElement) {
                const container = canvas.parentElement
                canvas.style.width = `${container.clientWidth}px`
                canvas.style.height = `${container.clientHeight}px`
              }
            }, 100)
          })
          .catch((err) => {
            setError(err)
            setLoading(false)
            console.error('Unity WebGL loading error:', err)
          })

        // Cleanup wheel handler
        return () => {
          canvas.removeEventListener('wheel', handleWheel)
        }
      }
    }

    script.onerror = () => {
      setError(new Error('Failed to load Unity loader script'))
      setLoading(false)
    }

    document.body.appendChild(script)
    scriptLoadedRef.current = true

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      scriptLoadedRef.current = false
    }
  }, [canvasRef])

  return { loading, error, unityInstance: unityInstanceRef.current }
}

export default useUnity

