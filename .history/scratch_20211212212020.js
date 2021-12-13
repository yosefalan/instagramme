
let array = []

function createArray(a) {
  for (let i = 0; i <= 120; i++){
    a.push(i)
  }
}

createArray(array)


function randomArrayShuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
return array
}

randomArrayShuffle(array)

array.forEach(ele => {
  console.log(db.session.add(p${ele`)
})
db.session.add(p1)
