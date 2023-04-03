
//Array multiplicado por 3
const multiplicaPor3 = (array) => {
  const novoArray = []
  for (let i = 0; i < array.length; i++) {
    const numeroMultiplicado = array[i] * 3
    novoArray.push(numeroMultiplicado)
  }
  return novoArray
}

const arrNumeros = [0, 5, 7, 9, 2]
//console.log("Array os numeros", arrNumeros)
//console.log("Multiplicado por 3", multiplicaPor3(arrNumeros))

//Array de numeros pares
const retornaPares = (array) => {
  const novoArray = []
  for (let elemento of array) {
    if (elemento % 2 === 0) {
      novoArray.push(elemento)
    }
  }
  return novoArray
}

//console.log("RetornaPares", retornaPares(arrNumeros))

//Usando o .map()
const arrayMultiplicadoPor3 = arrNumeros.map((elemento, indice, arrayInteiro) => {
  return elemento * 3
})

//console.log(arrayMultiplicadoPor3)

//Usando o .filter()
const arrayPares = arrNumeros.filter((elemento) => {
  if (elemento % 2 === 0) {
    return false
  }
})
//console.log(arrayPares)

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

const mudaVidaPokemon = pokemons.map((poke) => {
  return {...poke,vida:100}
})
const pokemonsVidaCheia = mudaVidaPokemon
console.log(pokemonsVidaCheia)
console.log(pokemons)

const PokemonsFogo = pokemonsVidaCheia.filter((fogo) => {
  if (fogo.tipo === 'fogo') {
    return true
  }
})

console.log(PokemonsFogo)