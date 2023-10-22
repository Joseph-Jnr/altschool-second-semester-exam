import { useEffect } from 'react'

const TriggerError = () => {
  useEffect(() => {
    throw new Error('This is a simulated error during routing.')
  }, [])

  return <></>
}

export default TriggerError
