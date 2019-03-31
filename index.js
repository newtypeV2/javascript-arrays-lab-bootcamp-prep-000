var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(newName){
  kittens.push(newName)
}

function destructivelyPrependKitten(newName){
  kittens.unshift(newName)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(newName){
  return [...kittens,newName]
}
