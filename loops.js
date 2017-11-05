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

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  let l = array.length - 1

  do {
    array.splice(l, 1)
    l = l - 1
  } while (l > -1 || maybeTrue())

  return array
}
