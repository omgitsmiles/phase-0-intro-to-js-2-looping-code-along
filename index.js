// Code your solutions in this file

function writeCards(array, event) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
    }
    return newArr;
}

function countDown(n) {
    while (n >= 0) {
    console.log(n)
    n--
    }
}