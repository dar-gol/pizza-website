type PlusMinusInput = {
  readonly value: string | number
  readonly disabled: Array<boolean>
  readonly title: string
  handleButtons: (changing: number) => void
}
