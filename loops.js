function forLoop(array) {
  for (let i = 0, l = 25; i < l; i++) {
    let s = i === 1 ? "I am 1 strange loop." : `I am ${i} strange loops.`
    array.push(s)
  }
  return array
}

function whileLoop(countdown) {
  while (countdown > 0) {
    console.log(--countdown)
  }
  return 'done'
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue())

  return array
}
