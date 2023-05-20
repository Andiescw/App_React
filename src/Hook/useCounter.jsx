import { useState } from "react"

export const useCounter = (inicial = 0, min, max) => {
    const [ counter, setCounter] = useState(inicial)

    let handleAdd = () => {
        if (counter < max)
        setCounter(counter + 1)
    }

    let handleRemove = () => {
        if (counter > min) {
            setCounter(counter - 1)
        }
    }
    
  return { counter, handleAdd, handleRemove }
}