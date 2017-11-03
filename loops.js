function forLoop(array){
  for(var i = 0; i<25; i++){
    if(i===1){
      array.push('I am 1 strange loop.');
    }else {
        array.push(`I am ${i} strange loops.`);
    }
  }
  console.log(array)
  return array
}

function whileLoop(n){
 n = 50;
  while(n>=0) {
    console.log(n);
    --n;
  }
  console.log('done');
}
function maybeTrue(){
  return Math.random() >= 0.5;
}
function doWhileLoop(array){
  do {
    array.pop();
  }while (array.length > 0 && maybeTrue())

}
