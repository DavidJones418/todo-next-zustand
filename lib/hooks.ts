import { useEffect, useState } from 'react'

/** Works around client/server render mismatch caused by sync persist state. */
export function useDidHydrate() {
  const [didHydrate, setDidHydrate] = useState(false)
  useEffect(() => {
    setDidHydrate(true)
  }, [])
  return didHydrate
}
