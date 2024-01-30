import React from "react"

export default function useEscapeKey (callback) {
    const handleEscapeKey = React.useCallback((e) => {
        if (e.key === 'Escape') {
            callback()
        }
    }, [callback])

    React.useEffect(() => {
        document.addEventListener('keydown', handleEscapeKey)

        return () => document.removeEventListener('keydown', handleEscapeKey)
    }, [handleEscapeKey])
}