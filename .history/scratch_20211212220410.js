let array = []

function createArray(a) {
  for (let i = 0; i <= 120; i++){
    a.push(i)
  }
}

createArray(array)

function randomArrayShuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
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
  console.log(`db.session.add(p${ele})`)
})
array.forEach(ele => {
  console.log(`db.session.add(photo${ele})`)
})


createdAt='2021-12-1 21:49:26.044706
createdAt='2021-12-2 21:49:26.044706
createdAt='2021-12-3 21:49:26.044706
createdAt='2021-12-4 21:49:26.044706
createdAt='2021-12-5 21:49:26.044706
createdAt='2021-12-6 21:49:26.044706
createdAt='2021-12-7 21:49:26.044706
createdAt='2021-12-8 21:49:26.044706
createdAt='2021-12-9 21:49:26.044706
createdAt='2021-12-10 21:49:26.044706
createdAt='2021-12-11 21:49:26.044706
createdAt='2021-12-12 21:49:26.044706

createdAt=DateTime(2021, 12, 1 21:49:26.044706)
