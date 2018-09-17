// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.splice(-1)
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  kittens.unshift(name)
  return kittens
}