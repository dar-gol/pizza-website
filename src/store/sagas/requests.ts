export function getSauce() {
  return fetch('http://localhost:3333/api/sauce').then((data) => data.json())
}

export function getIngredient() {
  return fetch('http://localhost:3333/api/ingredient').then((data) =>
    data.json()
  )
}

export function getPizza() {
  return fetch('http://localhost:3333/api/pizza').then((data) => data.json())
}
