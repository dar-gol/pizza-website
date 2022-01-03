import { useState } from 'react'

const useChoosenIngredients = (): ChoosenIngredients => {
  const [choosenIngredients, setChoosenIngredients] = useState<string[]>([])

  const handleChoosen = (index: string): void => {
    setChoosenIngredients((prev: string[]) => {
      const copyPrev = [...prev]
      const ingrIndex = copyPrev.indexOf(index)
      if (ingrIndex > -1) {
        copyPrev.splice(ingrIndex, 1)
        return copyPrev
      }
      copyPrev.push(index)
      return copyPrev
    })
  }

  const resetChoosen = (): void => {
    setChoosenIngredients([])
  }

  return { choosenIngredients, handleChoosen, resetChoosen }
}

export default useChoosenIngredients
